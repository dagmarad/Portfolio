import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu.jsx';


  class Home extends React.Component{
    render(){
      return (

    <section  id="home" >
      <Menu/>
        <div className="home__invitation">

          <h3>Hi, my name is Dagmara</h3>
          <p><strong>I am junior front-end developer. I have finished front-end bootcamp course at Coders Lab.
            Here is my portfolio created with ReactJS. Check my sample projects.</strong>
          </p>
        </div>

        <div className="pointer"><a href="#portfolio">&gt;</a></div>
  </section>
  )
    }
  }

  export default Home;
