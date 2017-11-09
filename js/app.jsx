import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.jsx';
import Menu from './menu.jsx';
import Portfolio from './portfolio.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';



document.addEventListener('DOMContentLoaded', () => {



  class App extends React.Component {

    render(){
      return (<div>
        <Menu/>
        <Home/>
        <Portfolio />
        <Skills/>
        <Contact/>
      </div>)
    }
  }


    ReactDOM.render(<App />, document.querySelector('#app'));
});
