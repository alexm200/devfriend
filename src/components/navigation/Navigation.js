import React, { Component } from 'react';
import Logo from './compontents/Logo';
import NavigationItem from './compontents/NavigationItem';
import navStyles from '../../styles/modules/navigation.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uiActions } from '../../store/actions/ui';
import { menuItemActions } from '../../store/actions/menuItem';
import { library } from '@fortawesome/fontawesome-svg-core';

class Navigation extends Component {

  render() {  
    return (
        <ul className={[navStyles.sidebar, "navbar-nav"].join(" ")}>
            <Logo></Logo>

            <div style={{ display: this.props.user.isLoggedIn ? "block" : "none" }}>

              <hr className={navStyles.divider}></hr>
              <NavigationItem icon="home" text="Home" navigateUrl="/"></NavigationItem>
              <hr className={navStyles.divider}></hr>
              {
                [...this.props.menuItems].sort((x, y) => { return y.order - x.order }).map((i, index) => {               
                  return (
                    <div key={index}>
                      {
                        i.isHeader ?
                        <div className={navStyles.heading}>{i.text}</div>
                        :
                        <div>
                          <NavigationItem icon={Object.keys(library.definitions.fab).includes(i.icon) ? ['fab', i.icon] : i.icon} text={i.text} navigateUrl={`/_${i.text}`}></NavigationItem>
                          {i.hasDivider && <hr className={navStyles.divider}></hr>}
                        </div>
                      }                    
                    </div>                  
                  )                
                })
              }

              <NavigationItem icon="edit" text="Edit Menu" class={navStyles.addBtn} navigateUrl="/menu"></NavigationItem>

            </div>

      </ul>
    );
  }
}

export default connect(
  state => { return { ui: state.ui, menuItems: state.menuItem, user: state.user }},
  dispatch => bindActionCreators(Object.assign({}, uiActions, menuItemActions), dispatch)    
)(Navigation);