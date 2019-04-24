import React, { Component } from 'react';
import styles from '../../styles/modules/login.module.scss';
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { userActions } from '../../store/actions/user';

class Login extends Component {

    login = () => {
        console.log("login");
    }

    render() {
        return (
        <div className="row justify-content-center">
            <div className="col-lg-3">
                <div className={styles.wrap}>
                    <div className="text-center">
                        <h1 className="h4 mb-4">Welcome Back!</h1>
                    </div>
                    <div className="user">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" placeholder="Enter Username..." />
                        </div>
                        <div className="form-group error error-offset animated--grow-in">
                            Username can not be empty
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-user" placeholder="Password" />
                        </div>
                        <div className="form-group error error-offset">
                            Password can not be empty
                        </div>                        
                        <div className="form-group">
                            <div className={`${styles.checkboxLabel} custom-control custom-checkbox small`}>
                                <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-user btn-block" onClick={this.login} >
                            Login
                        </button>
                        <hr/>
                        <div className="text-center">
                            <NavLink className="small" to="/register">Create an Account!</NavLink>                            
                        </div>                        
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
)(Login);
