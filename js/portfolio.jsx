import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component{
  render(){
    return (<section id="portfolio">
        <h3>My projects</h3>
        <div className="portfolio__list">
          <div className="portfolio__list__item"></div>
          <div className="portfolio__list__item"></div>
          <div className="portfolio__list__item"></div>
          <div className="portfolio__list__item"></div>
          <div className="portfolio__list__item"></div>
          <div className="portfolio__list__item"></div>
        </div>
        <div className="pointer"><a href="#skillsDiv">&gt;</a></div>

    </section>
    )
  }
}

export default Portfolio;
