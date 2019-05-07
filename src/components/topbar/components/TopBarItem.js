import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/modules/topbar.module.scss';

class TopBarItem extends Component {
  render() {
    return (
        <li className={`${styles.item} ${this.props.isMobile ? styles.mobile : ''}`}>            
            <button onClick={this.props.topBarItem_onClick} className={styles.navLink} aria-haspopup="true" aria-expanded="false">
                {this.props.label !== '' && <span className={`${styles.label}`}>{this.props.label}</span>}                
                <FontAwesomeIcon icon={this.props.icon} />
            </button>            
            {
                this.props.dropdownItems &&
                <div style={{display: this.props.isOpen ? "block" : "none"}} className={`${styles.dropdownMenu } ${this.props.dropdownHasPadding ? '' : styles.nopadding} dropdown-menu animated--grow-in show`} aria-labelledby="searchDropdown">
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