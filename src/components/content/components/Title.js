import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardActions } from '../../../store/actions/card';
import { utils } from '../../../utils';

class Title extends Component {

  btnAddCard_onClick = (e) => {
    this.props.createCardRequest(utils.getUserId(), this.props.category, "Enter title...", "Enter text...");
  }

  render() {
    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">            
            <button onClick={this.btnAddCard_onClick} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <FontAwesomeIcon icon="plus"></FontAwesomeIcon> Add Card
            </button>
        </div>
    );
  }
}

export default connect(
  state => { return {} },
  dispatch => bindActionCreators(cardActions, dispatch)    
)(Title);