import React from 'react'
import {connect} from 'react-redux'
import LoginForm from '../components/LoginForm'
import {postLogin} from '../actions/LoginAction'

const mapStateToProps = (state={},ownProps) => {

  return {
    redirectPath: state.LoginReducer.redirectPath,
    isLoginSucceed: state.LoginReducer.isLoginSucceed,
    errMsg: state.LoginReducer.errMsg
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    handleSubmit: (username,password) => {
      dispatch(postLogin(username,password))
    }
  }
}

const LoginFormContainer = connect(mapStateToProps,mapDispatchToProps)(LoginForm)

export default LoginFormContainer
