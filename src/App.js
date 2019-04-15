import React, { Component } from 'react';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/Navigation';
import Content from './components/Content';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faHome, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faJs, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons"

library.add(faLaptopCode, faHome, faSearch, faJs, faHtml5, faCss3, faBars);

class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Navigation></Navigation>
        <Content></Content>
      </div>
    );
  }
}

export default App;
