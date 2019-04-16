import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../../styles/modules/topbar.module.scss';

class SearchInput extends Component {
  render() {
    return (
        <div className="input-group">
            <input type="text" className={[styles.inputSearch, "form-control"].join(" ")} placeholder="Search for..." aria-label="Search" />
            <div className="input-group-append">
              <button className={[styles.btnSearch, "btn"].join(" ")} type="button">                  
                  <FontAwesomeIcon icon="search" />
              </button>
            </div>
        </div>
    );
  }
}

export default SearchInput;