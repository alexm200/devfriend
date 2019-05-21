import React, { Component } from 'react';
import TopBar from '../topbar/TopBar';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import styles from '../../styles/modules/content.module.scss';
import Login from './Login';
import Register from './Register';
import { PrivateRoute } from './components/PrivateRoute';
import Notification from './components/Notification';
import Menu from './Menu';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { menuItemActions } from '../../store/actions/menuItem';
import Template from './components/Template';

class Content extends Component {  
  render() {    
    return (
      <div className={`${styles.contentWrapper} d-flex flex-column`}>
        <div className={styles.content}>
          <Route path="/:page?" component={TopBar} />
          <div className="container-fluid">                        
            <Notification></Notification>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              
              {
                this.props.menuItems.map((i, index) => {
                  return <PrivateRoute key={index} path={`/_${i.text}`} category={i.text} component={Template} />
                })
              }

              <PrivateRoute path="/menu" component={Menu} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>          
        </div>        
      </div>
    );
  }
}

export default connect(
  state => { return { menuItems: state.menuItem }},
  dispatch => bindActionCreators(Object.assign({}, menuItemActions), dispatch)    
)(Content);