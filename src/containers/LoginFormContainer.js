import React from 'react'
import {connect} from 'react-redux'
import LoginForm from '../components/LoginForm'
import {loginSucceed,loginFailed} from '../actions/LoginAction'

const mapStateToProps = (state={},ownProps) => {
  console.log(state)
  console.log(ownProps)
  return {
    redirectPath: state.redirectPath,
    isLoginSucceed: state.isLoginSucceed,
    errMsg: state.errMsg
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleSubmit: (username,password) => {
      console.log("submit form.")
      console.log("username="+username)
      console.log("password="+password)
      if(!username.trim()){
        dispatch(loginFailed("username is empty."))
        return
      }
      if(!password.trim()){
        dispatch(loginFailed("password is empty."))
        return
      }
      dispatch(loginSucceed())
    }
  }
}

const LoginFormContainer = connect(mapStateToProps,mapDispatchToProps)(LoginForm)

export default LoginFormContainer
