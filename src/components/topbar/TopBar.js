import React, { Component } from 'react';
import styles from '../../styles/modules/topbar.module.scss';
import ToggleButton from './components/ToggleButton';
import TopBarItem from './components/TopBarItem';
import SearchForm from './components/SearchForm';
import SearchInput from './components/SearchInput';
import LogoutButton from './components/LogoutButton';

class TopBar extends Component {
  render() {
    return (
        <nav className={`${styles.topBar} navbar navbar-expand d-none`}>
            <ToggleButton></ToggleButton>            
            <SearchForm></SearchForm>

            <ul className="navbar-nav ml-auto">
              <TopBarItem 
                icon="search" 
                isMobile={true}
                dropdownItems={[<SearchInput />]}
                dropdownHasPadding={true}
              />                              
              <TopBarItem 
                icon="user"
                dropdownItems={[<LogoutButton />]}
                dropdownHasPadding={false}
              />
            </ul>

        </nav>
    );
  }
}

export default TopBar;