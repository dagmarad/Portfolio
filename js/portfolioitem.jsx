import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';



class PortfolioItem extends React.Component{

  render(){
    const items = [
      {
      title: 'Architektura wina',
      img: './img/winnica.jpg',
      desc:'Company page created in WordPress. I customize the appearance, edited the template ',
      add:"http://architekturawina.pl",
      github:'https://github.com/dagmarad/Architektura-wina'

      },
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
    desc: "Dynamically generated slider with randomly chosen images provided with JSON API.",
    add:"http://dagmaragruszczynska.pl/nasa",
    github:"https://github.com/dagmarad/Nasa-Api-Challenge"
    },
    {title: "Daily expense app",
      img: './img/expense.jpg',
    desc: "Application created in React to chceck your daily expenses. I use: HTML, Bootstrap, ReactJS.",
    add:"http://dagmaragruszczynska.pl/dailyexpense",
    github:'https://github.com/dagmarad/Daily-Expense-App'
    },
    {title: "JavaScript component examples",
    img: './img/code.jpg',
    desc: "Elements created in Javascript: slider, menu, gallery, tooltip.",
    add:"http://dagmaragruszczynska.pl/javascript",
    github:'https://github.com/dagmarad/JavaScript-Component-Example'
    },
    ];

const projects = items.map( (elem,index) =>{
  return (<li className="portfolio__list__item" key={elem.title}>
  <div className="backgroundImage" style = {{backgroundImage: `url(${elem.img})`}}><div className="portfolio__list__item__overlay">
  <h4 className="backgroundImage__header">{elem.title}</h4><p className="backgroundImage__description">{elem.desc}</p>
  <a className="portfolio__list__link" href={elem.add} target="_blank"></a><span className="portfolio__list__container">
    <a className="portfolio__list__github" href={elem.github} target="_blank">Github source
    {icons.github}</a></span>
  </div></div></li>);
});


    return (<ul className="portfolio__table">
      {projects}
    </ul>
    )
 }
}
    export default PortfolioItem;
