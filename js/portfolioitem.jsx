import React from 'react';
import ReactDOM from 'react-dom';



class PortfolioItem extends React.Component{

  render(){
    return (<div>
      <h1>{this.props.title}</h1>
      <p>{this.props.desc}</p>
    </div>)
 }
}
    export default PortfolioItem;
