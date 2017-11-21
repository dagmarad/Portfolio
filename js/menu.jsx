import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

  class Menu extends React.Component{

    render(){
          return (

    <div className="menu container container--mousemove">
        <div className="menu__left" ></div>
        <div className="menu__center">
          <ul className="menu__table">
            <li className="menu__list"><a href="#home">HOME</a></li>
            <li className="menu__list"><a href="#portfolio">PORTFOLIO</a></li>
            <li className="menu__list"><a href="#skills">SKILLS</a></li>
            <li className="menu__list"><a href="#contact">CONTACT</a></li>
        </ul>
        </div>
        <div className="menu__right ">
          <ul>
            <li className="menu__list"><a className="linkedin" href="https://www.linkedin.com/in/dagmara-gruszczynska/" target="blank">{icons.linkedinMenu}</a></li>
            <li className="menu__list"><a className="git" href="https://github.com/dagmarad/" target="blank">{icons.git}</a></li>
          </ul>
        </div>
      </div>
    )
    }
  }


    export default Menu;
