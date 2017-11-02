import React from 'react';
import ReactDOM from 'react-dom';

  class Menu extends React.Component{
    render(){
      return (
        <ul className="menuUl">
          <li><a href="#homeDiv">Home</a></li>
          <li><a href="#portfolioDiv">Portfolio</a></li>
          <li><a href="#skillsDiv">Co umiem</a></li>
          <li><a href="#contactDiv">Kontakt</a></li>
        </ul>)
    }
  }


    export default Menu;
