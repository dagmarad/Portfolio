import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';
import NavLink from './NavLink.jsx';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

    class Menu extends React.Component{
      render(){


      return (


     <div className="menu container container--mousemove">
       <div className="menu__left"></div>
       <div className="menu container">
         <div className="menu__left" ></div>
          <div className="menu__center">
            <ul>
              <li className="menu__list"><NavLink to='/home'  activeClassName="active">PORTFOLIO</NavLink></li>
              <li className="menu__list"><NavLink to='/portfolio' activeClassName="active">PORTFOLIO</NavLink></li>
               <li className="menu__list"><NavLink to='/skills' activeClassName="active">SKILLS</NavLink></li>
              <li className="menu__list"><NavLink to='/contact' activeClassName="active">CONTACT</NavLink></li>
              </ul>
          </div>
            <div className="menu__right">
              <ul>
                <li className="menu__list"><a className="linkedin" href="https://www.linkedin.com/in/dagmara-gruszczynska/" target="blank">{icons.linkedinMenu}</a></li>
                <li className="menu__list"><a className="git" href="https://github.com/dagmarad/" target="blank">{icons.git}</a></li>
              </ul>
          </div>
        </div>
      </div>
      )
      }
    }


      export default Menu;
