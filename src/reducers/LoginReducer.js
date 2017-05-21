const LoginReducer = (state={},action) => {

  switch(action.type){
    case 'LOGIN_SUCCEED':
    {
      return {
        isLoginSucceed: action.isLoginSucceed,
        redirectPath: '/home'
      }
    }
    case 'LOGIN_FAILED':
    {
      return {
        errMsg: action.errMsg,
        isLoginSucceed: action.isLoginSucceed
      }
    }
    default:
    {
      return state
    }
  }
}
export default LoginReducer
