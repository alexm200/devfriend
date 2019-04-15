import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Logo extends Component {
  render() {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <FontAwesomeIcon icon="laptop-code" />                    
            </div>
            <div className="sidebar-brand-text mx-3">Dev Friend</div>
        </a>
    );
  }
}

export default Logo;