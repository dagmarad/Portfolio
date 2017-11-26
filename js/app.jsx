import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.jsx';
import Menu from './menu.jsx';
import Portfolio from './portfolio.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';
import View from './index.jsx';
import NavLink from './NavLink.jsx';
import {Router, Route, Link, hashHistory}from 'react-router';
import { HashRouter} from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
 class App extends React.Component {
  render(){
      return (

        <HashRouter>

          <div>

        <Router history={hashHistory}>
        <Route path='/' component={View}/>

        <Route path='/home' component={Home}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/contact' component={Contact}/>
        </Router>
      </div>
    </HashRouter>

      )
    }
  }

    ReactDOM.render(<App />, document.querySelector('#app'));
});
