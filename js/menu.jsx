import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

  class Menu extends React.Component{

    render(){
      return (
    <div className="containerMenu">
    <div className="menuDiv">
        <div className="menuLeftDiv"></div>
        <div className="menuCenterDiv">
          <ul className="menuUl">
            <li><a href="#homeDiv">Home</a></li>
            <li><a href="#portfolioDiv">Portfolio</a></li>
            <li><a href="#skillsDiv">Skills</a></li>
            <li><a href="#contactDiv">Contact</a></li>
          </ul>
        </div>
        <div className="menuRightDiv">
          <ul className="socialUl">
            <li><div className="SocialIcon"><SocialIcon url="http://linkedin.com/in/dagmara-gruszczynska/" /></div></li>
            <li><div className="SocialIcon"><SocialIcon className="socialIcon" url="http://github.com/dagmarad" /></div></li>
          </ul>
        </div>
      </div>
    </div>)
    }
  }


    export default Menu;
