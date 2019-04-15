import React, { Component } from 'react';
import Logo from './Logo';
import NavigationItem from './NavigationItem';

class Navigation extends Component {
  render() {
    return (
        <ul className="navbar-nav sidebar bg-gradient-primary">
            <Logo></Logo>
            <hr className="sidebar-divider my-0"></hr>
            <NavigationItem isActive={true} icon="home" text="Home" navigateUrl="/"></NavigationItem>
            <hr className="sidebar-divider"></hr>
            <div className="sidebar-heading">
              Front End
            </div>
            <NavigationItem icon={['fab', 'js']} text="Javascript" navigateUrl="/javascript"></NavigationItem>
            <NavigationItem icon={['fab', 'css3']} text="CSS" navigateUrl="/css"></NavigationItem>
            <NavigationItem icon={['fab', 'html5']} text="HTML" navigateUrl="/html"></NavigationItem>
            <hr className="sidebar-divider"></hr>
            <div className="sidebar-heading">
              Back End
            </div>            
      </ul>
    );
  }
}

export default Navigation;