import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  class Home extends React.Component{
    render(){
      return <div className="homeDiv">
      <h1>Cześć, mam na imię Dagmara</h1>
      <p>Niedawno ukończyłam dwumiesięczny kurs Front-end Developer w Coders Lab i teraz szukam pracy. Znam różne fajne technologie.</p>
      <div className="pointer"><b>&gt;</b></div>
      </div>
    }
  }
  class Menu extends React.Component{
    render(){
      return (
        <ul className="menuUl">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Co umiem</li>
        </ul>)
    }
  }
  class Portfolio extends React.Component{
    render(){
      return (<div className="portfolioDiv">
        <ul className="portfolioUl"> <b>Moje projekty</b>
          <li>Cat Shelter App</li>
          <li>Nasa API</li>
          <li>Wedding page</li>
          <li>To do list</li>
          <li>Daily Expense App</li>
        </ul>
      </div>
      )
    }
  }
  class Skills extends React.Component{
    render(){
      return <div className="skillsDiv">
        <ul className="skillsUl">Moje umiejętności
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Jquery</li>
          <li>React</li>
        </ul>
      </div>
    }
  }
  class App extends React.Component {
    render(){
      return <div>
        <Menu />
       <Home/>
       <Portfolio/>
       <Skills/>
       </div>
    }
  }


    ReactDOM.render(<App />, document.querySelector('#app'));
});
