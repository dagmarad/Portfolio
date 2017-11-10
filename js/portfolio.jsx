import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioItem from './portfolioitem.jsx';

class Portfolio extends React.Component{
  render(){
    return (<section id="portfolio">
        <h3>My projects</h3>
        <div className="portfolio__list">

              <PortfolioItem/>


        </div>
        <div className="pointer"><a href="#skills">&gt;</a></div>

    </section>
    )
  }
}

export default Portfolio;
