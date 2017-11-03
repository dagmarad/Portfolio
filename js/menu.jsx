import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

  class Menu extends React.Component{
    render(){
      return (
    <div className="container menuDiv">
        <div className="menuLeftDiv"></div>
        <div className="menuCenterDiv">
          <ul className="menuUl">
            <li><a href="#homeDiv">Home</a></li>
            <li><a href="#portfolioDiv">Portfolio</a></li>
            <li><a href="#skillsDiv">Co umiem</a></li>
            <li><a href="#contactDiv">Kontakt</a></li>
          </ul>
        </div>
        <div className="menuRightDiv">
          <ul className="socialUl">
            <li><SocialIcon url="http://linkedin.com/in/in/dagmara-gruszczynska/" /></li>
            <li><SocialIcon className="socialIcon" url="http://github.com/dagmarad" /></li>
          </ul>
        </div>

    </div>)
    }
  }


    export default Menu;
