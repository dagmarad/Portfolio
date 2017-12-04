import React from 'react';
import ReactDOM from 'react-dom';



class PortfolioItem extends React.Component{

  render(){
    const items = [
      {title: "Sit on chair",
        img: './img/cat.jpg',
      desc: "Sample front page created with HTML, CSS, JS",
      add:"http://dagmaragruszczynska.pl/sitonchair"
      },

    {title: 'Wedding page',
      img: './img/background.gif',
      desc:'Responsive page with HTML, CSS, JS',
      add:"http://dagmaragruszczynska.pl/weddingpage"
    },
    {title: "NASA API Challenge",
      img: './img/world.jpg',
    desc: "Photogallery - Jquery & AJAX/REST",
    add:"http://dagmaragruszczynska.pl/nasa"
    },
    {title: "Daily expense app",
      img: './img/expense.png',
    desc: "Application created in React",
    add:"http://dagmaragruszczynska.pl/dailyexpense"
    },
    {title: "Javascript code example",
    img: './img/code.jpg',
    desc: "Slider, gallery, menu, to do list",
    add:"http://dagmaragruszczynska.pl/javascript"
    },
    {
    title: 'Cat Shelter App',
    img: './img/cat.jpg',
    desc:'Simple application filters cat in react ',
    add:"http://dagmaragruszczynska.pl/catshelter"

    },
    ];

const projects = items.map( (elem,index) =>{
  return (<li className="portfolio__list__item" key={elem.title}>
  <div className="backgroundImage" style = {{backgroundImage: `url(${elem.img})`}}><div className="portfolio__list__item__overlay">
  <h4 className="backgroundImage__header">{elem.title}</h4><p className="backgroundImage__description">{elem.desc}</p>
  <a href={elem.add} target="_blank"></a>
  </div></div></li>);
});


    return (<ul className="portfolio__table">
      {projects}
    </ul>
    )
 }
}
    export default PortfolioItem;
