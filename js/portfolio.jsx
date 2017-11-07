import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component{
  render(){
    return (<section id="portfolioDiv">
        <h3>My projects</h3>
        <div className="portfolioDivContainer">
          <div className="portfolioDivExample"><b>Cat Shelter App</b>
        Small and simple aplication in React - you can find a cat to adopt.</div>
          <div className="portfolioDivExample"><b>Nasa API</b></div>
          <div className="portfolioDivExample"><b>Wedding page</b></div>
          <div className="portfolioDivExample"><b>Example of javascript</b></div>
          <div className="portfolioDivExample"><b>Daily Expense App</b></div>
          <div className="portfolioDivExample"><b></b></div>
        </div>
        <div className="pointer"><a href="#skillsDiv">&gt;</a></div>

    </section>
    )
  }
}

export default Portfolio;
