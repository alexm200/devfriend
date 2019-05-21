import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import styles from '../../../styles/modules/navigation.module.scss';

class NavigationItem extends Component {
  render() {
    return (
        
            <li className="nav-item">
                <NavLink exact activeClassName={styles.active} className={`${styles.navLink} ${this.props.class}`} to={this.props.navigateUrl}>
                    {this.props.icon !== "" && <FontAwesomeIcon icon={this.props.icon} />}
                    <span>{this.props.text}</span>
                </NavLink>
            </li>
    );
  }
}

export default NavigationItem;