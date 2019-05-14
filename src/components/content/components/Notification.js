import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uiActions } from '../../../store/actions/ui';
import messageStyles from '../../../styles/modules/message.module.scss';

class Notification extends Component {

  render() {    
    
    return (
        <div>
            {
                this.props.ui.notifications.map((i, index) => {                    
                    return <div key={index} className={`${messageStyles.notification} ${i.type === 'success' ? messageStyles.success : messageStyles.error}`} style={{ marginTop: (index * 3) + "rem" }}>{i.message}</div>                            
                })
            }
        </div>        
    );
  }
}

export default connect(
  state => { return { ui: state.ui }},
  dispatch => bindActionCreators(uiActions, dispatch)    
)(Notification);