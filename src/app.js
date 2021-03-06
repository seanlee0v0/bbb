import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {Router,Route} from 'react-router'
import {createHashHistory} from 'history'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import LoginFormContainer from './containers/LoginFormContainer'
import reducer from './reducers/index'
import Home from './components/Home'

let loggerMiddleware = createLogger()
let store = createStore(reducer,applyMiddleware(thunkMiddleware,loggerMiddleware))
let history = createHashHistory()
window.store = store
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
