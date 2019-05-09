import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Title extends Component {
  render() {
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{this.props.text}</h1>
            <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <FontAwesomeIcon icon="plus"></FontAwesomeIcon> Add Card
            </button>
        </div>
    );
  }
}

export default Title;