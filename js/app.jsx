import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  class Container extends React.Component{
    render(){
      return <article className="containerHome">
      <h1>Cześć, mam na imię Dagmara</h1>
      <p>Niedawno ukończyłam dwumiesięczny kurs Front-end Developer w Coders Lab i teraz szukam pracy. Znam różne fajne technologie.</p>

      </article>
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
  class App extends React.Component {
    render(){
      return <div>
        <Menu />
       <Container/>
       </div>
    }
  }


    ReactDOM.render(<App />, document.querySelector('#app'));
});
