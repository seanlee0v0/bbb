import React from 'react'
import {Redirect} from 'react-router'

const LoginForm = ({isLoginSucceed,redirectPath,errMsg,handleSubmit}) => {
  let username,password

  return isLoginSucceed?(<Redirect to={redirectPath} />):(
    <div id="login-form-div">
      <div id="errMsg" style={{display:(!errMsg?'none':'')}}><span>{errMsg}</span></div>
      <form id="login-form" name="login-form" onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(username.value,password.value)
      }}>
        <table>
          <tbody>
            <tr>
              <td>User ID:</td>
              <td><input type="text" name="username" ref={node=>{username=node}}/></td>
              <td><span>*</span></td>
            </tr>
            <tr>
              <td>password:</td>
              <td><input type="password" name="password" ref={node=>{password=node}}/></td>
              <td><span>*</span></td>
            </tr>
            <tr>
              <td><button type="submit">submit</button></td>
              <td><button type="reset">reset</button></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default LoginForm
