import React, { Component } from 'react';
import Logo from './compontents/Logo';
import NavigationItem from './compontents/NavigationItem';
import styles from '../../styles/modules/navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
        <ul className={[styles.sidebar, "navbar-nav"].join(" ")}>
            <Logo></Logo>
            <hr className={styles.divider}></hr>
            <NavigationItem icon="home" text="Home" navigateUrl="/"></NavigationItem>
            <hr className={styles.divider}></hr>
            <div className={styles.heading}>Front End</div>
            <NavigationItem icon={['fab', 'js']} text="Javascript" navigateUrl="/javascript"></NavigationItem>
            <NavigationItem icon={['fab', 'css3']} text="CSS" navigateUrl="/css"></NavigationItem>
            <NavigationItem icon={['fab', 'html5']} text="HTML" navigateUrl="/html"></NavigationItem>
            <hr className={styles.divider}></hr>
            <div className={styles.heading}>Back End</div>
            <NavigationItem icon="database" text="SQL" navigateUrl="/sql"></NavigationItem>
      </ul>
    );
  }
}

export default Navigation;