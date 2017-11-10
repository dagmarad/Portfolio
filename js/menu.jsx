import React from 'react';
import ReactDOM from 'react-dom';
import icons from './icons.jsx';

  class Menu extends React.Component{
    constructor(props){
    super(props);
    this.state = {
      backgroundColor: 'rgb(249,240,234)',
    }
  }
    handleScroll=()=> {
      this.setState({backgroundColor:'rgba(249,240,234,0.8)'});
      console.log('slrol');
    }


    render(){
          return (

    <div className="menu container" onDoubleClick={this.handleScroll} style={{backgroundColor:this.state.backgroundColor}}>
        <div className="menu__left" ></div>
        <div className="menu__center">
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
        <div className="menu__right">
          <ul>
            <li><a className="linkedin" href="https://www.linkedin.com/in/dagmara-gruszczynska/" target="blank">{icons.linkedinMenu}</a></li>
            <li><a className="git" href="https://github.com/dagmarad/" target="blank">{icons.git}</a></li>
          </ul>
        </div>
      </div>
    )
    }
  }


    export default Menu;
