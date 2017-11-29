import React from 'react';
import ReactDOM from 'react-dom';



class PortfolioItem extends React.Component{

  render(){
    const items = [
    {
    title: 'Cat Shelter App',
    img: './img/cat.jpg',
    desc:'Simple application in react '
    },
    {title: 'Wedding page',
      img: './img/background.gif',
      desc:'Responsive page with HTML, CSS, JS'
    },
    {title: "Javascript code example",
    img: './img/code.jpg',
    desc: "Slider, gallery, menu, to do list"
    },
    {title: "NASA API Challenge",
      img: './img/world.jpg',
    desc: "Photogallery - Jquery & AJAX/REST"
    },
    {title: "Daily expense app",
      img: './img/expense.png',
    desc: "Application created in React"
    },
    {title: "Sit on chair",
      img: './img/cat.jpg',
    desc: "Page created with HTML, CSS, JS"
    },
    ];

const projects = items.map( (elem,index) =>{
  return (<li className="portfolio__list__item" key={elem.title}>
  <div className="backgroundImage" style = {{backgroundImage: `url(${elem.img})`}}><div className="portfolio__list__item__overlay">
  <h4 className="backgroundImage__header">{elem.title}</h4>
  </div></div><p>{elem.desc}</p></li>);
});

    return (<ul className="portfolio__table">
      {projects}
    </ul>
    )
 }
}
    export default PortfolioItem;
