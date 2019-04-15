import React, { Component } from 'react';
import TopBar from './topbar/TopBar';

class Content extends Component {
  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar></TopBar>
        </div>        
      </div>
    );
  }
}

export default Content;