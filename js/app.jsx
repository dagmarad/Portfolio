import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



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
        </ul >
      </div>
      )
    }
  }
  class Skills extends React.Component{
    render(){
      return (<div className="skillsDiv">
      <svg className="umbrella" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
 <title id="title">Umbrella Icon</title>
       <path d="M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z"/>
     </svg>
     <SocialIcon url="http://linkedin.com/in/jaketrent" />
     <SocialIcon url="http://github.com/in/jaketrent" />






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
