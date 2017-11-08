import React from 'react';
import ReactDOM from 'react-dom';



class PortfolioHeader extends React.Component{

  render(){
    return (
      <div>
      <h1>{this.props.title}</h1>
      <p><img src={this.props.image}/></p>
      <p>this.props.desc</p>
      </div>
      )
    }
  }
class PortfolioItem extends React.Components{
  render(){
    const itemsHeader = this.props.items.map( items =>{
       <PortfolioHeader title={items.title} image ={items.image}
        desc={items.desc}/>;
    });
    return <div>
      {itemsHeader}
    </div>
  }
 }
 const items = [
   {
     title:"Daily Expense App",
     image:"../img/code.jpg",
     desc:"You can calculate yout expenses in React"
   },
   {title:"Cat shelter",
     image: "../img/cat.jpg",
     desc:"Find your favorite cat"
   },
   {title: "Wedding page",
     image:"../background.gif",
     desc:"Wepage about wedding - HTML, CSS, JS"

   }
 ];



    export default PortfolioItem;
