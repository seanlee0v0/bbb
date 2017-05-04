import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import About from './module/about';
import Inbox from './module/inbox';
let history = createBrowserHistory();

export default class App extends Component{
  render(){
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={()=>(<h1>Welcome</h1>)} />
          <Route path="/inbox" component={Inbox} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App/>,document.body);
