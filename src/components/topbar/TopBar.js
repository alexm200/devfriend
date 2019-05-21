import React, { Component } from 'react';
import styles from '../../styles/modules/topbar.module.scss';
import ToggleButton from './components/ToggleButton';
import TopBarItem from './components/TopBarItem';
import SearchForm from './components/SearchForm';
import SearchInput from './components/SearchInput';
import LogoutButton from './components/LogoutButton';
import { uiActions } from '../../store/actions/ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions/user';

class TopBar extends Component {

  
  componentDidMount() {
    document.addEventListener('mousedown', this.document_onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.document_onClick);
  }

  document_onClick = (e) => {    
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.props.closeAccountOptions();
    }
  }

  topBarItem_onClick = (e) => {
    if (this.props.ui.isAccountOptionsOpen){
      this.props.closeAccountOptions();
    }
    else{
      this.props.openAccountOptions();
    }
  }

  btnLogout_onClick = (e) => {
    this.props.closeAccountOptions();
    this.props.logoutUserRequest();
    this.logoutUserRequest = true;
  }

  componentWillReceiveProps(nextProps) {    
    if (nextProps.user.isLoggedOut && this.logoutUserRequest && this.props.location.pathname !== "/login") {
      nextProps.history.push("/login");
      this.logoutUserRequest = false;
    }
}

  render() {
      return (
        this.props.user.isLoggedIn && <nav ref={(node) => { this.wrapperRef = node }} className={`${styles.topBar} navbar navbar-expand`}>
              <ToggleButton></ToggleButton>            
              <SearchForm></SearchForm>
  
              <ul className="navbar-nav ml-auto">
                <TopBarItem 
                  icon="search" 
                  isMobile={true}
                  dropdownItems={[<SearchInput />]}
                  dropdownHasPadding={true}
                />                              
                <TopBarItem 
                  icon="user"
                  label={this.props.user.username}
                  isOpen={this.props.ui.isAccountOptionsOpen}
                  topBarItem_onClick={this.topBarItem_onClick}
                  dropdownItems={[<LogoutButton btnLogout_onClick={this.btnLogout_onClick} />]}
                  dropdownHasPadding={false}
                />
              </ul>
          </nav>        
      );
  }
}

export default connect(
  state => { return { ui: state.ui, user: state.user }},
  dispatch => bindActionCreators(Object.assign({}, uiActions, userActions), dispatch)    
)(TopBar);