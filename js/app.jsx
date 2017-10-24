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
  class App extends React.Component {
    render(){
      return <Container/>
    }
  }


    ReactDOM.render(<App />, document.querySelector('#app'));
});
