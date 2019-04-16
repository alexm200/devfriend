import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/modules/topbar.module.scss';

class ToggleButton extends Component {
  render() {
    return (
        <button className={`${styles.toggleBtn} btn`}>
            <FontAwesomeIcon icon="bars" />              
        </button>
    );
  }
}

export default ToggleButton;