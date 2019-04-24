import React, { Component } from 'react';
import './styles/App.css';
import './styles/shared.scss';
import './styles/animations.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import { BrowserRouter as Router } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faHome, faSearch, faBars, faDatabase, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faJs, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"

library.add(faLaptopCode, faHome, faSearch, faJs, faHtml5, faCss3, faBars, faDatabase, faUser, faSignOutAlt);

class App extends Component {
  render() {
    return (
      <div className="d-flex">
        <Router>
          <Navigation></Navigation>
          <Content></Content>
        </Router>
      </div>
    );
  }
}

export default App;
