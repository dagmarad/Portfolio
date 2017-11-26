import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';
import Menu from './menu.jsx';

class Skills extends React.Component{
  render(){
    return (
      <section id="skills" className="container">
        <Menu/>
    <div className="skills_better">
    <h2> Moje umiejętności</h2>
    <p>Potrafię pisać fajny i wesoły kod. Używam Webpacka i Gulpa, korzystam z Sassa. Jak renderuje to tylko w Reakcie. Cała ta strona jest w Reakcie bo bardzo go lubię. Chciałabym pracować z reactem, bo przekazywanie propsów od dzieci do rodziców to moje hobby. Poza tym lubię pętle w Javascripcie. Najbardziej te podwójne. Jak mi się nie chcę to używam Jquery bo jest szybciej, ale nic nie odaje przyjemności jakiej czuję, kiedy pisze document query selector</p>

      <ul className="skills__list">
        <li className="skills__list__item"> {icons.html}<h3>HTML</h3></li>

        <li className="skills__list__item">{icons.css}<h3>CSS</h3></li>
        <li className="skills__list__item">{icons.sass}<h3>SASS</h3></li>

        <li className="skills__list__item">{icons.javascript}<h3>Javascript</h3></li>

        <li className="skills__list__item">{icons.jquery}<h3>Jquery</h3></li>
        <li className="skills__list__item">{icons.es6}<h3>ECMASCRIPT6</h3></li>

        <li className="skills__list__item">{icons.react}<h3>React</h3></li>

        <li className="skills__list__item">{icons.webpack}<h3>Webpack</h3></li>
        <li className="skills__list__item">{icons.github}<h3>GIT</h3></li>
      </ul>
      </div>
      <div className="pointer"><a href="#contact">&gt;</a></div>
    </section>
   )
  }
}
  export default Skills;
