import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  class Home extends React.Component{
    render(){
      return <div className="homeDiv">
        <Menu/>
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
      return (<div className="skillsDiv">


          <div className="skillsDivExample">HTML</div>
          <div className="skillsDivExample">CSS</div>
          <div className="skillsDivExample">Javascript</div>
          <div className="skillsDivExample">Jquery</div>
          <div className="skillsDivExample">React</div>
          <div className="skillsDivExample">Git</div>
          <div className="skillsDivExample">Gulp</div>
          <div className="skillsDivExample">Webpack</div>
          <div className="skillsDivExample">SASS</div>


      </div>
     )
    }
  }
  class App extends React.Component {
    render(){
      return <div>
       <Home/>
       <Portfolio/>
      <Skills/>

       </div>
    }
  }


    ReactDOM.render(<App />, document.querySelector('#app'));
});
