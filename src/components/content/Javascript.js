import React, { Component } from 'react';
import { utils } from '../../utils';
import Template from './components/Template';

class Javascript extends Component {

  render() {    
    return (
      <Template category={utils.Category.Javascript}></Template>
    );
  }
}

export default Javascript;