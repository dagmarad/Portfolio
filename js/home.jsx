import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Menu from './menu.jsx';

  class Home extends React.Component{
    render(){
      return (
    <div className="homeDiv container">
        <Menu/>
        <h1>Cześć, mam na imię Dagmara</h1>
        <p>Niedawno ukończyłam dwumiesięczny kurs Front-end Developer w Coders Lab i teraz szukam pracy. Znam różne fajne technologie.</p>
          <div className="pointer"><b>&gt;</b></div>
          <div className="homeDivSocial">
            <SocialIcon url="http://linkedin.com/in/in/dagmara-gruszczynska/" />
            <SocialIcon url="http://github.com/dagmarad" />
          </div>
    </div>)
    }
  }

  export default Home;
