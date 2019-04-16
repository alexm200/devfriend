import React, { Component } from 'react';
import styles from '../../styles/modules/login.module.scss';
import { NavLink } from "react-router-dom";

class Login extends Component {
  render() {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-3">
                <div className={styles.wrap}>
                    <div className="text-center">
                        <h1 className="h4 mb-4">Create an Account!</h1>
                    </div>
                    <form className="user">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" placeholder="Enter Username..." />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-user" placeholder="Password" />
                        </div>
                        <button className="btn btn-primary btn-user btn-block">
                            Register
                        </button>
                        <hr/>
                        <div class="text-center">
                            <NavLink className="small" to="/login">Already have an account? Login!</NavLink>
                        </div>                        
                    </form>        
                </div>            
            </div>
        </div>
    );
  }
}

export default Login;