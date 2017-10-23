import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  class Container extends React.Component{
    render(){
      return <div>
      <h1>Kilka słów o mnie</h1>
      <p>Ukończyłam kurs z Coders Lab i teraz szukam pracy. Znam różne fajne technologie.</p>
      <img></img>
      </div>
    }
  }
  class App extends React.Component {
    render(){
      return <Container/>
    }
  }


    ReactDOM.render(<App />, document.querySelector('#app'));
});
