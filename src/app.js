import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Router,Route} from 'react-router'
import {createHashHistory} from 'history'

import LoginFormContainer from './containers/LoginFormContainer'
import LoginReducer from './reducers/LoginReducer'
import Home from './components/Home'

let store = createStore(LoginReducer)
let history = createHashHistory()

ReactDOM.render(
<div>
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={LoginFormContainer} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  </Provider>
</div>
  ,
  document.getElementById('root')
)
