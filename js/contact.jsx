import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';
import Menu from './menu.jsx';

  class Contact extends React.Component{
    render(){
      return (
        <section id="contact" className="container">
          <Menu/>
          <div className="home__invitation">
            <h3>Contact</h3>
            <p>Would you like to contact me?</p>
            <p><a href ="tel:48609094679">{icons.phone} Please call me at 609094679</a></p>
            <p><a href ="mailto:gruszczynska.dagmara@gmail.com">{icons.message} gruszczynska.dagmara@gmail.com</a></p>
          </div>
          <div className="pointer less-than"><a href="#home">&lt;</a></div>
        </section>)
    }
  }

  export default Contact;
