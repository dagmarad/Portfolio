import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu.jsx';


  class Home extends React.Component{
    render(){
      return (

    <section  id="home" >
      <Menu/>
        <div className="home__invitation">
          <canvas id="canvas-image-blending"></canvas>
          <h3>Cześć, mam na imię Dagmara</h3>
          <p>Niedawno ukończyłam dwumiesięczny kurs Front-end Developer w Coders Lab i teraz szukam pracy. Znam różne fajne technologie.
          Z mojego portfolia dowiesz się, jakie są moje projekty oraz jakie znam technologię</p>
        </div>

        <div className="pointer"><a href="#portfolio">&gt;</a></div>
  </section>
  )
    }
  }

  export default Home;
