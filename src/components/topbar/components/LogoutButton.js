import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/modules/topbar.module.scss';

class LogoutButton extends Component {
  render() {
    return (
        <button onClick={this.props.btnLogout_onClick} className={styles.dropdownItem}>
            <FontAwesomeIcon className={styles.icon} icon="sign-out-alt" />
            Logout
        </button>
    );
  }
}

export default LogoutButton;