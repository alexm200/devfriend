import React, { Component } from 'react';
import styles from '../../styles/modules/login.module.scss';
import messageStyles from '../../styles/modules/message.module.scss';
import { NavLink } from "react-router-dom";
import { userActions } from '../../store/actions/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Register extends Component {

    btnRegister_onClick = () => {
        this.props.createUserRequest(this.props.user.registrationUsername, this.props.user.registrationPassword);        
    }

    txtUsername_onChange = (e) => {        
        this.props.updateRegistrationUsername(e.currentTarget.value);        
    }

    txtPassword_onChange = (e) => {
        this.props.updateRegistrationPassword(e.currentTarget.value);        
    }

    render() {
    return (
        <div className="row justify-content-center">            
            <div className={styles.wrap}>
                <div className="text-center">
                    <h1 className="h4 mb-4">Create an Account!</h1>
                </div>
                <div className="user">
                    <div style={{display: this.props.user.registrationMessage === '' ? "none" : "block"}} className={messageStyles.success}>
                        { 
                            this.props.user.registrationMessage.includes("{LoginLink}") && this.props.user.registrationMessage.slice(0, this.props.user.registrationMessage.indexOf("{LoginLink}"))
                        }
                        {
                            this.props.user.registrationMessage.includes("{LoginLink}") && <NavLink to="/login">Login</NavLink>
                        }
                        { 
                            this.props.user.registrationMessage.includes("{LoginLink}") &&
                            this.props.user.registrationMessage.slice(this.props.user.registrationMessage.indexOf("{LoginLink}") + "{LoginLink}".length)
                        }
                        {
                            this.props.user.registrationMessage.includes("{LoginLink}") || this.props.user.registrationMessage
                        }
                    </div>
                    <div className="form-group">
                        <input value={this.props.user.registrationUsername} onChange={this.txtUsername_onChange} type="text" className="form-control form-control-user" placeholder="Enter Username..." />
                    </div>
                    <div style={{display: this.props.user.registrationUsernameError === '' ? "none" : "block"}} className="form-group error error-offset animated--grow-in">
                        {this.props.user.registrationUsernameError}
                    </div>                        
                    <div className="form-group">
                        <input value={this.props.user.registrationPassword} onChange={this.txtPassword_onChange} type="password" className="form-control form-control-user" placeholder="Password" />
                    </div>
                    <div style={{display: this.props.user.registrationPasswordError === '' ? "none" : "block"}} className="form-group error error-offset animated--grow-in">
                        {this.props.user.registrationPasswordError}
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
    state => { return { user: state.user }},
    dispatch => bindActionCreators(userActions, dispatch)    
)(Register)