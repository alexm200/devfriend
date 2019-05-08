import React, { Component } from 'react';
import styles from '../../styles/modules/login.module.scss';
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { userActions } from '../../store/actions/user';
import { uiActions } from '../../store/actions/ui';
import Message from './components/Message';

class Login extends Component {

    btnlogin_onClick = () => {
        this.props.loginUserRequest(this.props.user.loginUsername, this.props.user.loginPassword, this.props.ui.isLoginRememberMeChecked);        
        this.loginUserRequest = true;
    }

    txtUsername_onChange = (e) => {        
        this.props.updateLoginUsername(e.currentTarget.value);        
    }

    txtPassword_onChange = (e) => {
        this.props.updateLoginPassword(e.currentTarget.value);        
    }

    componentDidMount() {
        this.props.updateLoginMessage("");
        this.props.updateLoginUsernameError("");
        this.props.updateLoginPasswordError("");
        this.props.updateLoginRememberMe(false);
    }

    componentWillReceiveProps(nextProps) {        
        if (nextProps.user.isLoggedIn && this.loginUserRequest && this.props.location.pathname !== "/") {
            nextProps.history.push("/");
            this.loginUserRequest = false;
        }
    }

    divRememberMe_onClick = () => {
        this.props.updateLoginRememberMe(!this.props.ui.isLoginRememberMeChecked);        
    }

    chbxRememberMe_onChange = (e) => {

    }

    render() {
        return (
            <div className="row justify-content-center">                
                <div className={styles.wrap}>
                    <div className="text-center">
                        <h1 className="h4 mb-4">Welcome Back!</h1>
                    </div>
                    <div className="user">
                        <Message message={this.props.user.loginMessage} type={this.props.user.loginMessageType}></Message>
                        <div className="form-group">
                            <input value={this.props.user.loginUsername} onChange={this.txtUsername_onChange} type="text" className="form-control form-control-user" placeholder="Enter Username..." />
                        </div>
                        <div style={{display: this.props.user.loginUsernameError === '' ? "none" : "block"}} className="form-group error error-offset animated--grow-in">
                            {this.props.user.loginUsernameError}
                        </div>
                        <div className="form-group">
                            <input value={this.props.user.loginPassword} onChange={this.txtPassword_onChange} type="password" className="form-control form-control-user" placeholder="Password" />
                        </div>
                        <div style={{display: this.props.user.loginPasswordError === '' ? "none" : "block"}} className="form-group error error-offset animated--grow-in">
                            {this.props.user.loginPasswordError}
                        </div>                        
                        <div className="form-group">
                            <div className={`${styles.checkboxLabel} custom-control custom-checkbox small`} onClick={this.divRememberMe_onClick}>
                                <input checked={this.props.ui.isLoginRememberMeChecked} onChange={this.chbxRememberMe_onChange} ref={(node) => { this.chbxRememberMe = node }} type="checkbox" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-user btn-block" onClick={this.btnlogin_onClick} >
                            Login
                        </button>
                        <hr/>
                        <div className="text-center">
                            <NavLink className="small" to="/register">Create an Account!</NavLink>                            
                        </div>                        
                    </div>        
                </div>
            </div>
        );
  }
}

export default connect(
    state => { return { ui: state.ui, user: state.user }},
    dispatch => bindActionCreators(Object.assign({}, uiActions, userActions), dispatch)    
)(Login);
