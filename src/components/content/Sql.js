import React, { Component } from 'react';
import { utils } from '../../utils';
import Template from './components/Template';

class Sql extends Component {

  render() {    
    return (
      <Template category={utils.Category.Sql}></Template>
    );
  }
}

export default Sql;