import React, { Component } from 'react';
import { utils } from '../../utils';
import Template from './components/Template';

class Css extends Component {

  render() {    
    return (
      <Template category={utils.Category.Css}></Template>
    );
  }
}

export default Css;