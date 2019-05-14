import React, { Component } from 'react';
import { utils } from '../../utils';
import Template from './components/Template';

class Html extends Component {

  render() {    
    return (
      <Template category={utils.Category.Html}></Template>
    );
  }
}

export default Html;