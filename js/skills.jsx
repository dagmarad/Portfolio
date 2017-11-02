import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

class Skills extends React.Component{
  render(){
    return (<div id="skillsDiv" className="container">
    <h2 className="skillsh2"> Moje umiejętności</h2>
    <p>Potrafię pisać fajny i wesoły kod. Używam Webpacka i Gulpa, korzystam z Sassa. Jak renderuje to tylko w Reakcie. Cała ta strona jest w Reakcie bo bardzo go lubię. Chciałabym pracować z reactem, bo przekazywanie propsów od dzieci do rodziców to moje hobby. Poza tym lubię pętle w Javascripcie. Najbardziej te podwójne. Jak mi się nie chcę to używam Jquery bo jest szybciej, ale nic nie odaje przyjemności jakiej czuję, kiedy pisze document query selector</p>
      <div className="skillsDiv">
        <div className="skillsDivExample"> {icons.html}HTML</div>

        <div className="skillsDivExample">{icons.css}CSS</div>

        <div className="skillsDivExample">{icons.javascript}Javascript</div>

        <div className="skillsDivExample">{icons.jquery}Jquery</div>

        <div className="skillsDivExample">{icons.react}React</div>

        <div className="skillsDivExample">{icons.sass}SASS</div>
        <div className="skillsDivExample">Webpack</div>
        <div className="skillsDivExample">GIT</div>
        <div className="skillsDivExample">ECMASCRIPT6</div>
      </div>
    </div>
   )
  }
}
  export default Skills;
