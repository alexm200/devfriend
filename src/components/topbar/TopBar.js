import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchInput from './SearchInput';

class TopBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <FontAwesomeIcon icon="bars" />              
            </button>
            
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <SearchInput></SearchInput>
            </form>

            <ul className="navbar-nav ml-auto">

              <li className="nav-item dropdown no-arrow d-sm-none">
                <button className="nav-link" id="searchDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FontAwesomeIcon icon="search" />
                </button>
                
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in show" aria-labelledby="searchDropdown">
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <SearchInput></SearchInput>
                  </form>
                </div>                
              </li>

            </ul>

        </nav>
    );
  }
}

export default TopBar;