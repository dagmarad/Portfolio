import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

  class Contact extends React.Component{
    render(){
      return (
        <section id="contact" className="container">
          <div className="home__invitation">
            <h3>Contact</h3>
            <p>Would you like to contact me?</p>
            <p>{icons.phone} Please call me at 609094679 </p>
            <p>{icons.message} Send e-mail at gruszczynska.dagmara@gmail.com</p>
          </div>
          <div className="pointer less-than"><a href="#home">&lt;</a></div>
        </section>)
    }
  }

  export default Contact;
