import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchInput extends Component {
  render() {
    return (
        <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
            <button className="btn btn-primary" type="button">                  
                <FontAwesomeIcon icon="search" />
            </button>
            </div>
        </div>
    );
  }
}

export default SearchInput;