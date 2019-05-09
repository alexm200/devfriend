import React, { Component } from 'react';
import TopBar from '../topbar/TopBar';
import { Route, Switch } from "react-router-dom";
import Javascript from './Javascript';
import Css from './Css';
import Html from './Html';
import Home from './Home';
import Sql from './Sql';
import styles from '../../styles/modules/content.module.scss';
import Login from './Login';
import Register from './Register';
import { PrivateRoute } from './components/PrivateRoute';

class Content extends Component {
  render() {
    return (
      <div className={`${styles.contentWrapper} d-flex flex-column`}>
        <div className={styles.content}>
          <Route path="/:page?" component={TopBar} />
          <div className="container-fluid">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/javascript" component={Javascript} />
              <PrivateRoute path="/css" component={Css} />
              <PrivateRoute path="/html" component={Html} />
              <PrivateRoute path="/sql" component={Sql} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>          
        </div>        
      </div>
    );
  }
}

export default Content;