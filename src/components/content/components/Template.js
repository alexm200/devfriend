import React, { Component } from 'react';
import Title from '../components/Title';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardActions } from '../../../store/actions/card';
import { utils } from '../../../utils';

class Template extends Component {

  componentDidMount(){
    this.props.getCardsRequest(utils.getUserId(), this.props.category);
  }

  render() {    
    return (
      <div>
        <Title text={this.props.category}></Title>

        <div className="row">
          {
            this.props.cards.map((i)=> {
              return <Card key={i._id} title={i.title} text={i.text}></Card>              
            })
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => { return { cards: state.card }},
  dispatch => bindActionCreators(cardActions, dispatch)    
)(Template);