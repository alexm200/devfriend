import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contentStyles from '../../../styles/modules/content.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cardActions } from '../../../store/actions/card';
import { utils } from '../../../utils';

class Card extends Component {

    btnDelete_onClick = (e) => {                
        this.props.deleteCardRequest(this.props.card._id);
    }

    tbxTitle_onChange = (e) => {        
        const card = {...this.props.card};
        card.title = e.currentTarget.value;        
        this.props.updateCard(this.props.card._id, card);
    }

    tbx_onBlur = () => {
        this.props.updateCardRequest(this.props.card._id, {...this.props.card});
    }

    tbxTitle_onKeyPress = (e) => {
        if (e.key === "Enter"){
            this.tbxTitleRef.blur();
        }
    }

    componentDidMount(){
        this.tbxText_onkeyUp();
    }

    tbxText_onChange = (e) => {        
        const card = {...this.props.card};
        card.text = e.currentTarget.value;
        this.props.updateCard(this.props.card._id, card);
    }

    tbxText_onkeyUp = () => {
        this.tbxTextRef.style.height = "1px";
        this.tbxTextRef.style.height = (15+this.tbxTextRef.scrollHeight)+"px";
    }

    render() {
        return (
            <div className="col-xl-3 col-md-6">
                <div className="card mb-4 animated--grow-in">
                    <div className={`card-header py-3 pr-5 ${contentStyles.cardHeader}`}>
                        <input onKeyPress={this.tbxTitle_onKeyPress} 
                            placeholder="Enter title..."
                            onBlur={this.tbx_onBlur} 
                            ref={(node) => (this.tbxTitleRef = node)} 
                            type="text" 
                            value={this.props.card.title} 
                            onChange={this.tbxTitle_onChange} 
                            className={contentStyles.noTextbox}>
                        </input>
                        <button onClick={this.btnDelete_onClick} className={contentStyles.cardIcon}>
                            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className={`card-body ${contentStyles.cardBody}`}>
                        <div>
                            <textarea
                                placeholder="Enter text..."
                                onBlur={this.tbx_onBlur} 
                                ref={(node) => (this.tbxTextRef = node)} 
                                type="text" 
                                onKeyUp={this.tbxText_onkeyUp}
                                value={this.props.card.text} 
                                onChange={this.tbxText_onChange} 
                                className={contentStyles.noTextbox}>
                            </textarea>                            
                        </div>
                        <div className={contentStyles.created}>
                        {
                            utils.getDateFormat(new Date(this.props.card.date_created))
                        }
                        </div>
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