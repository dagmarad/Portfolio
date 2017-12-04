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
    <h3> Moje umiejętności</h3>
    <p>Potrafię pisać fajny i wesoły kod. Używam Webpacka i Gulpa, korzystam z Sassa. Jak renderuje to tylko w Reakcie. Cała ta strona jest w Reakcie bo bardzo go lubię. Chciałabym pracować z reactem, bo przekazywanie propsów od dzieci do rodziców to moje hobby. Poza tym lubię pętle w Javascripcie. Najbardziej te podwójne. Jak mi się nie chcę to używam Jquery bo jest szybciej, ale nic nie odaje przyjemności jakiej czuję, kiedy pisze document query selector</p>

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
