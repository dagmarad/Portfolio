import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

class Skills extends React.Component{
  render(){
    return (<section id="skills">
    <h2> Moje umiejętności</h2>
    <p>Potrafię pisać fajny i wesoły kod. Używam Webpacka i Gulpa, korzystam z Sassa. Jak renderuje to tylko w Reakcie. Cała ta strona jest w Reakcie bo bardzo go lubię. Chciałabym pracować z reactem, bo przekazywanie propsów od dzieci do rodziców to moje hobby. Poza tym lubię pętle w Javascripcie. Najbardziej te podwójne. Jak mi się nie chcę to używam Jquery bo jest szybciej, ale nic nie odaje przyjemności jakiej czuję, kiedy pisze document query selector</p>
      <div className="skills__list">
        <div className="skills__list__item"> {icons.html}<p>HTML</p></div>

        <div className="skills__list__item">{icons.css}<p>CSS</p></div>
        <div className="skills__list__item">{icons.sass}<p>SASS</p></div>

        <div className="skills__list__item">{icons.javascript}<p>Javascript</p></div>

        <div className="skills__list__item">{icons.jquery}<p>Jquery</p></div>
        <div className="skills__list__item">{icons.es6}<p>ECMASCRIPT6</p></div>

        <div className="skills__list__item">{icons.react}<p>React</p></div>

        <div className="skills__list__item">{icons.webpack}<p>Webpack</p></div>
        <div className="skills__list__item">{icons.github}<p>GIT</p></div>

      </div>
      <div className="pointer"><a href="#contactDiv">&gt;</a></div>
    </section>
   )
  }
}
  export default Skills;
