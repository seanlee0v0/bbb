import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import About from './module/about';
import Inbox from './module/inbox';

export default class App extends Component{
  render(){
    return (
      <Router>
      <Route path="/" render={()=>(<h1>Welcome</h1>)}/>

      </Router>
      <Route path="/about" component={About}/>
      <Router>
      </Router>
    );
  }
}

ReactDOM.render(<App/>,document.body);
