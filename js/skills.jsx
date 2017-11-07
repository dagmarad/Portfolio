import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

class Skills extends React.Component{
  render(){
    return (<section id="skillsDiv">
    <h2 className="skillsh2"> Moje umiejętności</h2>
    <div><p>Potrafię pisać fajny i wesoły kod. Używam Webpacka i Gulpa, korzystam z Sassa. Jak renderuje to tylko w Reakcie. Cała ta strona jest w Reakcie bo bardzo go lubię. Chciałabym pracować z reactem, bo przekazywanie propsów od dzieci do rodziców to moje hobby. Poza tym lubię pętle w Javascripcie. Najbardziej te podwójne. Jak mi się nie chcę to używam Jquery bo jest szybciej, ale nic nie odaje przyjemności jakiej czuję, kiedy pisze document query selector</p></div>
      <div className="skillsDiv">
        <div className="skillsDivExample"> {icons.html}<p>HTML</p></div>

        <div className="skillsDivExample">{icons.css}<p>CSS</p></div>
        <div className="skillsDivExample">{icons.sass}<p>SASS</p></div>

        <div className="skillsDivExample">{icons.javascript}<p>Javascript</p></div>

        <div className="skillsDivExample">{icons.jquery}<p>Jquery</p></div>
        <div className="skillsDivExample">{icons.es6}<p>ECMASCRIPT6</p></div>

        <div className="skillsDivExample">{icons.react}<p>React</p></div>

        <div className="skillsDivExample">{icons.webpack}<p>Webpack</p></div>
        <div className="skillsDivExample">{icons.github}<p>GIT</p></div>

      </div>
      <div className="pointer"><a href="#contactDiv">&gt;</a></div>
    </section>
   )
  }
}
  export default Skills;
