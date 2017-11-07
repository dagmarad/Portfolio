import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

  class Menu extends React.Component{

    render(){
      return (

    <div className="menu container">
        <div className="menu__left"></div>
        <div className="menu__center">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
        <div className="menu__right">
          <ul>
            <li><div><SocialIcon url="http://linkedin.com/in/dagmara-gruszczynska/" /></div></li>
            <li><div><SocialIcon url="http://github.com/dagmarad" /></div></li>
          </ul>
        </div>
      </div>
    )
    }
  }


    export default Menu;
