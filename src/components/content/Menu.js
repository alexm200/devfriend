import React, { Component } from 'react';
import { utils } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uiActions } from '../../store/actions/ui';
import { menuItemActions } from '../../store/actions/menuItem';
import MenuItem from './components/MenuItem';

class Menu extends Component {

  btnAddItem_onClick = () => {
    let maxOrder = Math.max.apply(Math, [...this.props.menuItems].map(function(i) { return i.order; }));        
    this.props.createMenuItemRequest(utils.getUserId(), "", false, false, "", maxOrder + 1, Date.now());
  }

  render() {

    return (
      <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">            
            <button onClick={this.btnAddItem_onClick} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <FontAwesomeIcon icon="plus"></FontAwesomeIcon> Add Item
            </button>
        </div>

        <div className="row">
          {
            this.props.menuItems.map((i)=> {
              return <MenuItem key={i._id} menuItem={i}></MenuItem>
            })
          }
        </div>

      </div>
    );
  }
}

export default connect(
  state => { return { ui: state.ui, menuItems: state.menuItem }},
  dispatch => bindActionCreators(Object.assign({}, uiActions, menuItemActions), dispatch)    
)(Menu);