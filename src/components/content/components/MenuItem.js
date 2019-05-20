import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contentStyles from '../../../styles/modules/content.module.scss';
import sharedStyles from '../../../styles/modules/shared.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { menuItemActions } from '../../../store/actions/menuItem';
import { utils } from '../../../utils';
import { library } from '@fortawesome/fontawesome-svg-core';

class MenuItem extends Component {

    btnDelete_onClick = (e) => {                
        this.props.deleteMenuItemRequest(this.props.menuItem._id);
    }

    tbx_onBlur = () => {
        this.props.updateMenuItemRequest(this.props.menuItem._id, {...this.props.menuItem});
    }

    tbxText_onKeyPress = (e) => {
        if (e.key === "Enter"){
            this.tbxTextRef.blur();
        }
    }    

    tbxText_onChange = (e) => {        
        const menuItem = {...this.props.menuItem};
        menuItem.text = e.currentTarget.value;
        this.props.updateMenuItem(this.props.menuItem._id, menuItem);
    }

    divHasDivider_onClick = () => {
        const menuItem = {...this.props.menuItem};
        menuItem.hasDivider = !menuItem.hasDivider;
        this.props.updateMenuItemRequest(this.props.menuItem._id, menuItem);
    }

    divIsHeader_onClick = () => {
        const menuItem = {...this.props.menuItem};
        menuItem.isHeader = !menuItem.isHeader;
        this.props.updateMenuItemRequest(this.props.menuItem._id, menuItem);
    }

    btnIcon_onClick = (icon) => {        
        const menuItem = {...this.props.menuItem};
        menuItem.icon = icon;
        this.props.updateMenuItemRequest(this.props.menuItem._id, menuItem);        
    }

    btnMoveUp_onClick = () => {        
        let menuItems = [...this.props.menuItems].sort((x, y) => { return x.order - y.order });
        let menuItemIndex = menuItems.findIndex(x => x._id === this.props.menuItem._id);
        if (menuItemIndex !== menuItems.length - 1){
            let nextItem = menuItems[menuItemIndex + 1];
            const menuItem = {...this.props.menuItem};
            menuItem.order = nextItem.order;
            nextItem.order = this.props.menuItem.order;
            this.props.updateMenuItemsRequest(
                [this.props.menuItem._id, nextItem._id],
                [menuItem, nextItem]
            );
        }
    }

    btnMoveDown_onClick = () => {
        let menuItems = [...this.props.menuItems].sort((x, y) => { return x.order - y.order });
        let menuItemIndex = menuItems.findIndex(x => x._id === this.props.menuItem._id);
        if (menuItemIndex !== 0){
            let previousItem = menuItems[menuItemIndex - 1];
            const menuItem = {...this.props.menuItem};
            menuItem.order = previousItem.order;
            previousItem.order = this.props.menuItem.order;
            this.props.updateMenuItemsRequest(
                [this.props.menuItem._id, previousItem._id],
                [menuItem, previousItem]
            );
        }
    }

    render() {

        const isMaxOrder = Math.max.apply(Math, [...this.props.menuItems].map(function(i) { return i.order; })) === this.props.menuItem.order;
        const isMinOrder = Math.min.apply(Math, [...this.props.menuItems].map(function(i) { return i.order; })) === this.props.menuItem.order;

        return (
            <div className="col-xl-3 col-md-6">
                <div className="card mb-4 animated--grow-in">
                    <div className={`card-header py-3 pr-5 ${contentStyles.cardHeader}`}>
                    <input onKeyPress={this.tbxText_onKeyPress} 
                            placeholder="Enter text..."
                            onBlur={this.tbx_onBlur} 
                            ref={(node) => (this.tbxTextRef = node)} 
                            type="text" 
                            value={this.props.menuItem.text} 
                            onChange={this.tbxText_onChange} 
                            className={contentStyles.noTextbox}>
                        </input>                    
                        <button onClick={this.btnDelete_onClick} className={contentStyles.cardIcon}>
                            <FontAwesomeIcon icon="times"></FontAwesomeIcon>
                        </button>
                    </div>
                    <div className={`card-body ${contentStyles.cardBody}`}>
                        <div>
                            <div className="form-group">
                                <div className={`${sharedStyles.checkboxLabel} custom-control custom-checkbox small`} onClick={this.divIsHeader_onClick}>
                                    <input checked={this.props.menuItem.isHeader} onChange={() => {}} ref={(node) => { this.chbxIsHeader = node }} type="checkbox" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customCheck">Is Header</label>
                                </div>
                            </div>
                            <div className="mb-4" style={{display: this.props.menuItem.isHeader ? "none" : "block"}}>
                                <div className="form-group">
                                    <div className={`${sharedStyles.checkboxLabel} custom-control custom-checkbox small`} onClick={this.divHasDivider_onClick}>
                                        <input checked={this.props.menuItem.hasDivider} onChange={() => {}} ref={(node) => { this.chbxHasDivider = node }} type="checkbox" className="custom-control-input" />
                                        <label className="custom-control-label" htmlFor="customCheck">Show Divider</label>
                                    </div>
                                </div>                                
                                <div className="d-flex flex-wrap">
                                    {
                                        Object.keys(library.definitions.fab).map((i, index) => {                                        
                                            return (                                            
                                                <button onClick={() => { this.btnIcon_onClick(i) }} key={index} className={`${sharedStyles.toggleBtn} ${this.props.menuItem.icon === i && sharedStyles.active}`}>
                                                    <FontAwesomeIcon icon={['fab', i]}></FontAwesomeIcon>
                                                </button> 
                                            )
                                        })
                                    }
                                    {
                                        Object.keys(library.definitions.fas).map((i, index) => {                                        
                                            return (                                            
                                                <button onClick={() => { this.btnIcon_onClick(i) }} key={index} className={`${sharedStyles.toggleBtn} ${this.props.menuItem.icon === i && sharedStyles.active}`}>
                                                    <FontAwesomeIcon icon={i}></FontAwesomeIcon>
                                                </button> 
                                            )
                                        })
                                    }                                 
                                </div>                               
                            </div>
                            <div className="form-group">                                
                                <button className={`btn btn-sm btn-primary mr-2`} disabled={isMaxOrder && "disabled"} onClick={this.btnMoveUp_onClick}>
                                    <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon> Move up
                                </button>
                                <button className={`btn btn-sm btn-primary mr-2`} disabled={isMinOrder && "disabled"} onClick={this.btnMoveDown_onClick}>
                                    <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon> Move Down
                                </button>                                
                            </div>
                        </div>
                        <div className={contentStyles.created}>
                        {
                            utils.getDateFormat(new Date(this.props.menuItem.dateCreated))
                        }
                        </div>
                    </div>
                </div>        
            </div>
        );
    }
}

export default connect(
    state => { return { menuItems: state.menuItem } },
    dispatch => bindActionCreators(menuItemActions, dispatch)    
  )(MenuItem);