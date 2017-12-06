import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';
import Menu from './menu.jsx';

class Skills extends React.Component{
  render(){
    return (
      <section id="skills" className="container">
        <Menu/>
    <div className="skills_container">
    <h3> My skills</h3>
    <p>I am able to work with HTML5 and CSS3 with SASS preprocessor. I know how to make responisve website, write code in JavaScript and jQuery, also I can create components in ReactJs.</p>
      <ul className="skills__list">
        <li className="skills__list__item"> {icons.html}<h4>HTML</h4></li>

        <li className="skills__list__item">{icons.css}<h4>CSS</h4></li>
        <li className="skills__list__item">{icons.sass}<h4>SASS</h4></li>

        <li className="skills__list__item">{icons.javascript}<h4>Javascript</h4></li>

        <li className="skills__list__item">{icons.jquery}<h4>Jquery</h4></li>
        <li className="skills__list__item">{icons.es6}<h4>ECMASCRIPT6</h4></li>

        <li className="skills__list__item">{icons.react}<h4>React</h4></li>

        <li className="skills__list__item">{icons.webpack}<h4>Webpack</h4></li>
        <li className="skills__list__item">{icons.github}<h4>GIT</h4></li>
      </ul>
      </div>
      <div className="pointer"><a href="#contact">&gt;</a></div>
    </section>
   )
  }
}
  export default Skills;
