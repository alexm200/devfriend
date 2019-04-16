import React, { Component } from 'react';
import styles from '../../../styles/modules/topbar.module.scss';
import SearchInput from './SearchInput';

class SearchForm extends Component {
  render() {
    return (
        <form className={styles.formSearch}>
            <SearchInput></SearchInput>
        </form>
    );
  }
}

export default SearchForm;