import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/modules/navigation.module.scss';
import { NavLink } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
        <NavLink className={[styles.brand, "d-flex", "align-items-center", "justify-content-center"].join(" ")} to="/">
            <div className={styles.icon}>
                <FontAwesomeIcon icon="laptop-code" />                    
            </div>
            <div className={[styles.text, "mx-3"].join(" ")}>Dev Friend</div>
        </NavLink>
    );
  }
}

export default Logo;