import React, { Component } from 'react';
import './styles/App.css';
import './styles/shared.scss';
import './styles/animations.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faHome, faSearch, faBars, faDatabase, faUser, faSignOutAlt, faPlus, faTimes, faEdit, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faJs, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"
import LoadingBar from 'react-redux-loading-bar';
import { userActions } from './store/actions/user';
import { utils } from './utils';
import { menuItemActions } from './store/actions/menuItem';

library.add(faLaptopCode, faHome, faSearch, faJs, faHtml5, faCss3, faBars, faDatabase, faUser, faSignOutAlt, faPlus, faTimes, faEdit, faArrowUp, faArrowDown);

class App extends Component {

  constructor(props){
    super(props);
    if (window.performance) {
      const user = utils.getUserFromStorage();      
      if (performance.navigation.type === 1 && user != null) {
        props.loginUser(user.userId, user.username);
        props.getMenuItemsRequest(user.userId);
      }
    }
  }

  render() {
    return (

      <div className="d-flex">      
        <LoadingBar className="loading-bar" />        
        <Navigation></Navigation>
        <Content></Content>        
      </div>

    );
  }
}

export default connect(
  state => { return { user: state.user }},
  dispatch => bindActionCreators(Object.assign({}, menuItemActions, userActions), dispatch)    
)(App);
