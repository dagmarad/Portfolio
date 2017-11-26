import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioItem from './portfolioitem.jsx';
import Menu from './menu.jsx';


class Portfolio extends React.Component{
  render(){

    return (<section id="portfolio" className="container">
      <Menu/>
        <div className="portfolio__list">
        <h3>My projects</h3>
              <PortfolioItem/>


        </div>
        <div className="pointer"><a href="#skills">&gt;</a></div>

    </section>
    )
  }
}

export default Portfolio;
