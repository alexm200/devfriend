import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardActions } from '../../../store/actions/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Template extends Component {

  componentDidMount(){
    this.props.getCards([]);
    this.props.getCardsRequest(this.props.user.userId, this.props.location.pathname.slice(1));
  }

  btnAddCard_onClick = (e) => {
    this.props.createCardRequest(this.props.user.userId, this.props.location.pathname.slice(1), "", "", Date.now());
  }

  render() {
    return (
      <div>        
        <div className="d-sm-flex align-items-center justify-content-between mb-4">            
            <button onClick={this.btnAddCard_onClick} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <FontAwesomeIcon icon="plus"></FontAwesomeIcon> Add Card
            </button>
        </div>

        <div className="row">
          {
            this.props.cards.map((i)=> {
              return <Card key={i._id} card={i}></Card>
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => { return { user: state.user, cards: state.card }},
  dispatch => bindActionCreators(cardActions, dispatch)    
)(Template);