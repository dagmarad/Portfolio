import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.jsx';
import Menu from './menu.jsx';
import Portfolio from './portfolio.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';
import NavLink from './NavLink.jsx';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';
import { HashRouter} from "react-router-dom";

class View extends React.Component {

   render(){
     return (<div>
       
       <Home/>

     </div>)
   }
 }

 export default View;
