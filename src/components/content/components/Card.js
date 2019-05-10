import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contentStyles from '../../../styles/modules/content.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardActions } from '../../../store/actions/card';

class Card extends Component {

    btnDelete_onClick = (e) => {        
        this.props.deleteCardRequest(this.props.id);
    }

    render() {
        return (
            <div className="col-xl-3 col-md-6">
                <div className="card mb-4 animated--grow-in">
                    <div className="card-header py-3 pr-5">
                        <h6 className="m-0 font-weight-bold text-primary">{this.props.title}</h6>
                        <button onClick={this.btnDelete_onClick} className={contentStyles.cardIcon}>
                            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                        </button>                        
                    </div>
                    <div className="card-body">
                        {this.props.text}
                    </div>
                </div>        
            </div>
        );
    }
}

export default connect(
    state => { return {} },
    dispatch => bindActionCreators(cardActions, dispatch)    
  )(Card);