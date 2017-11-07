import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

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
            <li><div><a href="https://www.linkedin.com/in/dagmara-gruszczynska/" target="blank">{icons.linkedin}</a></div></li>
            <li><div><a href="https://github.com/dagmarad/" target="blank">{icons.git}</a></div></li>
          </ul>
        </div>
      </div>
    )
    }
  }


    export default Menu;
