import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component{
  render(){
    return (<div className="portfolioDiv">
      <ul className="portfolioUl"> <b>Moje projekty</b>
        <li>Cat Shelter App</li>
        <li>Nasa API</li>
        <li>Wedding page</li>
        <li>To do list</li>
        <li>Daily Expense App</li>
      </ul >
    </div>
    )
  }
}

export default Portfolio;
