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


document.addEventListener('DOMContentLoaded', () => {



  class App extends React.Component {



    render(){
      return (
        <Router history={hashHistory}>
        <Route path='/' component={View}>
        <Route path='/menu' component={Menu}/>
        <Route path='/home' component={Home}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/contact' component={Contact}/>
        </Route>
        </Router>
      )
    }
  }

    ReactDOM.render(<App />, document.querySelector('#app'));
});
