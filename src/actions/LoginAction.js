import fetch from 'isomorphic-fetch'

export const requestLogin = () => (
  {
    type: 'REQUEST_LOGIN',
    isRequestLogin: true
  }
)
export const loginSucceed = () => (
  {
    type: 'LOGIN_SUCCEED',
    isLoginSucceed: true,
    isRequestLogin: false
  }
)

export const loginFailed = (errMsg) => (
  {
    type: 'LOGIN_FAILED',
    errMsg: errMsg,
    isLoginSucceed: false,
    isRequestLogin: false
  }
)

export function postLogin(username,password){
  return function(dispatch){
    dispatch(requestLogin())
    if(!username.trim()){
      dispatch(loginFailed("username is empty."))
      return
    }
    if(!password.trim()){
      dispatch(loginFailed("password is empty."))
      return
    }
    return fetch(`http://localhost:9000/src/simulateData/login.json`)
    .then(response => {
      if(response.status != 200){
        console.log(response)
        return {
          isLoginSucceed:false,
          errMsg:response.url+" "+response.status+"("+response.statusText+")"
        }
      }
      return response.json()
    })
    .then(json =>{
      if(json.isLoginSucceed){
        dispatch(loginSucceed())
      }else{
        dispatch(loginFailed(json.errMsg))
      }
    })
  }
}
