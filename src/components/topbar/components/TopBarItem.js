import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/modules/topbar.module.scss';

class TopBarItem extends Component {
  render() {
    return (
        <li className={`${styles.item} ${this.props.isMobile ? styles.mobile : ''}`}>
            <button className={styles.navLink} aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={this.props.icon} />
            </button>            
            {
                this.props.dropdownItems &&
                <div className={`${styles.dropdownMenu } ${this.props.dropdownHasPadding ? '' : styles.nopadding} dropdown-menu animated--grow-in show`} aria-labelledby="searchDropdown">
                {
                    this.props.dropdownItems.map((item, index) => {
                       return <div key={index}>{item}</div>;
                    })
                }                
                </div>
            }            
        </li>
    );
  }
}

export default TopBarItem;