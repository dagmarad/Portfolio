import React from 'react';
import ReactDOM from 'react-dom';



class PortfolioItem extends React.Component{

  render(){
    const items = [
      {title: "Sit on chair",
        img: './img/chair.jpg',
      desc: "Sample single page website created with HTML, CSS, JS.",
      add:"http://dagmaragruszczynska.pl/sitonchair",
      github:"https://github.com/dagmarad/Sit_on_chair_website"
      },

    {title: 'Wedding page',
      img: './img/wedding.jpg',
      desc:'Responsive website created with HTML, CSS, JS. Check my JS counter!',
      add:"http://dagmaragruszczynska.pl/weddingpage",
      github:"https://github.com/dagmarad/Wedding-page"
    },
    {title: "NASA API Challenge",
      img: './img/world.jpg',
    desc: "Dynamically generated slider with randomly chosen images provided with JSON API. I used HTML, CSS, jQuery.",
    add:"http://dagmaragruszczynska.pl/nasa",
    github:"https://github.com/dagmarad/Nasa-Api-Challenge"
    },
    {title: "Daily expense app",
      img: './img/expense.jpg',
    desc: "Application created in React, in which you can chceck your daily expenses. I used HTML, Bootstrap, ReactJS.",
    add:"http://dagmaragruszczynska.pl/dailyexpense",
    github:'https://github.com/dagmarad/Daily-Expense-App'
    },
    {title: "JavaScript component examples",
    img: './img/code.jpg',
    desc: "Simple elements created in Javascript: slider, menu, gallery, tooltip.",
    add:"http://dagmaragruszczynska.pl/javascript",
    github:'https://github.com/dagmarad/JavaScript-Component-Example'
    },
    {
    title: 'Cat Shelter App',
    img: './img/cat.jpg',
    desc:'My first, very simple application in React. Find your favorite cat with filter function. ',
    add:"http://dagmaragruszczynska.pl/catshelter",
    github:'https://github.com/dagmarad/Cat-shelter-app'

    },
    ];

const projects = items.map( (elem,index) =>{
  return (<li className="portfolio__list__item" key={elem.title}>
  <div className="backgroundImage" style = {{backgroundImage: `url(${elem.img})`}}><div className="portfolio__list__item__overlay">
  <h4 className="backgroundImage__header">{elem.title}</h4><p className="backgroundImage__description">{elem.desc}</p>
  <a className="portfolio__list__link" href={elem.add} target="_blank"></a><a className="portfolio__list__github" href={elem.github} target="_blank">Github source</a>
  </div></div></li>);
});


    return (<ul className="portfolio__table">
      {projects}
    </ul>
    )
 }
}
    export default PortfolioItem;
