import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';
import { SocialIcon } from 'react-social-icons';
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
              <li className="menu__list"><NavLink to='/home'  activeClassName="active">HOME</NavLink></li>
              <li className="menu__list"><NavLink to='/portfolio' activeClassName="active">PORTFOLIO</NavLink></li>
               <li className="menu__list"><NavLink to='/skills' activeClassName="active">SKILLS</NavLink></li>
              <li className="menu__list"><NavLink to='/contact' activeClassName="active">CONTACT</NavLink></li>
              </ul>
          </div>
            <div className="menu__right">
              <ul className="social__icons">
                 <li className="menu__list social"><SocialIcon url="http://linkedin.com/in/dagmara-gruszczynska/" style={{ height: 30, width: 30 }} color="#FF584C"  /></li>
                <li className="menu__list social"><SocialIcon url="http://github.com/dagmarad" style={{ height: 30, width: 30 }} color="#FF584C" />
                </li>
              </ul>
          </div>
        </div>
      </div>
      )
      }
    }


      export default Menu;
