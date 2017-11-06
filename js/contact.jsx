import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

  class Contact extends React.Component{
    render(){
      return (
        <div className="contactDiv" id="contactDiv">
          <div className="contactDivAddress">
            <h2>Contact</h2>
            <h3>{icons.message}Would you like to contact me?</h3>
            <p>{icons.phone}Please call me at 609094679 </p>
            <p>Send e-mail at gruszczynska.dagmara@gmail.com</p>
          </div>
        </div>)
    }
  }

  export default Contact;
