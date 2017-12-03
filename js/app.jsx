import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.jsx';
import Portfolio from './portfolio.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';
import View from './index.jsx';
import NavLink from './NavLink.jsx';
import {Router, Route, Link, hashHistory}from 'react-router';
import { HashRouter} from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
 class App extends React.Component {
   componentDidMount() {
    var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    image : {
        source: './img/computer.jpg',
        blendingMode: 'multiply',
        stretchMode: ['stretch-if-smaller', 'stretch-if-smaller']
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});
  }
  render(){
      return (

        <HashRouter>

          <div>
        <Router history={hashHistory}>
        <Route path='/' component={View}/>
        <Route path='/home' component={Home}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/contact' component={Contact}/>
        </Router>
      </div>
    </HashRouter>

      )
    }
  }

    ReactDOM.render(<App />, document.querySelector('#app'));
});
