import React, { Component } from 'react';
import styles from '../../styles/modules/login.module.scss';
import { NavLink } from "react-router-dom";
import { userActions } from '../../store/actions/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from './components/Message';
import { uiActions } from '../../store/actions/ui';

class Register extends Component {

    btnRegister_onClick = () => {
        this.props.createUserRequest(this.props.user.registrationUsername, this.props.user.registrationPassword);        
        this.registerUserRequest = true;
    }

    txtUsername_onChange = (e) => {        
        this.props.updateRegistrationUsername(e.currentTarget.value);        
    }

    txtPassword_onChange = (e) => {
        this.props.updateRegistrationPassword(e.currentTarget.value);        
    }

    componentDidMount() {
        this.props.updateRegistrationMessage("");
        this.props.updateRegistrationUsernameError("");
        this.props.updateRegistrationPasswordError("");    
    }

    componentWillReceiveProps(nextProps) {        
        if (nextProps.user.isLoggedIn && this.registerUserRequest && this.props.location.pathname !== "/") {
            nextProps.history.push("/");
            this.registerUserRequest = false;
        }
    }

    render() {
    return (
        <div className="row justify-content-center">            
            <div className={styles.wrap}>
                <div className="text-center">
                    <h1 className="h4 mb-4">Create an Account!</h1>
                </div>
                <div className="user">
                    <Message message={this.props.ui.registrationMessage} type={this.props.ui.registrationMessageType}></Message>
                    <div className="form-group">
                        <input value={this.props.user.registrationUsername} onChange={this.txtUsername_onChange} type="text" className="form-control form-control-user" placeholder="Enter Username..." />
                    </div>
                    <div style={{display: this.props.ui.registrationUsernameError === '' ? "none" : "block"}} className="form-group error error-offset animated--grow-in">
                        {this.props.ui.registrationUsernameError}
                    </div>                        
                    <div className="form-group">
                        <input autoComplete="new-password" value={this.props.user.registrationPassword} onChange={this.txtPassword_onChange} type="password" className="form-control form-control-user" placeholder="Password" />
                    </div>
                    <div style={{display: this.props.ui.registrationPasswordError === '' ? "none" : "block"}} className="form-group error error-offset animated--grow-in">
                        {this.props.ui.registrationPasswordError}
                    </div>                        
                    <button className="btn btn-primary btn-user btn-block" onClick={this.btnRegister_onClick}>
                        Register
                    </button>
                    <hr/>
                    <div className="text-center">
                        <NavLink className="small" to="/login">Already have an account? Login!</NavLink>
                    </div>                        
                </div>        
            </div>
        </div>
    );
  }
}

export default connect(
    state => { return { user: state.user, ui: state.ui }},
    dispatch => bindActionCreators(Object.assign({}, uiActions, userActions), dispatch)    
)(Register)