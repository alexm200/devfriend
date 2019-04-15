import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavigationItem extends Component {
  render() {
    return (
        
            <li className={this.props.isActive ? "nav-item active" : "nav-item"}>
                <a className="nav-link" href={this.props.navigateUrl}>
                    <FontAwesomeIcon icon={this.props.icon} />
                    <span>{this.props.text}</span>
                </a>
            </li>
    );
  }
}

export default NavigationItem;