export const loginSucceed = () => (
  {
    type: 'LOGIN_SUCCEED',
    isLoginSucceed: true
  }
)

export const loginFailed = (errMsg) => (
  {
    type: 'LOGIN_FAILED',
    errMsg: errMsg,
    isLoginSucceed: false
  }
)
