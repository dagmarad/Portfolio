import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component{
  render(){
    return (<div className="portfolioDiv" id="portfolioDiv">
        <h3>My projects</h3>
        <div className="portfolioDivContainer">
          <div className="portfolioDivExample"><b>Cat Shelter App</b></div>
          <div className="portfolioDivExample"><b>Nasa API</b></div>
          <div className="portfolioDivExample"><b>Wedding page</b></div>
          <div className="portfolioDivExample"><b>Example of javascript</b></div>
          <div className="portfolioDivExample"><b>Daily Expense App</b></div>
          <div className="portfolioDivExample"><b></b></div>
        </div>

    </div>
    )
  }
}

export default Portfolio;
