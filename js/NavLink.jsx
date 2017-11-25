import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link} from 'react-router';

class NavLink extends React.Component{
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
}
      export default NavLink;
