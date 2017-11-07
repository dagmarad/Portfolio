import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

  class Contact extends React.Component{
    render(){
      return (
        <section id="contact">
          <div className="wrapper">
            <div><h3>Contact</h3></div>
            <div>Would you like to contact me?</div>
            <div>{icons.phone} Please call me at 609094679 </div>
            <div>{icons.message} Send e-mail at gruszczynska.dagmara@gmail.com</div>
            <div className="pointer"><a href="#homeDiv">&lt;</a></div>
          </div>
        </section>)
    }
  }

  export default Contact;
