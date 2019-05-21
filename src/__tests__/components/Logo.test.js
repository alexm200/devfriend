import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Logo from '../../components/navigation/components/Logo';

describe('<Logo />', () => {
    describe('render()', () => {
      test('renders the component', () => {
        const wrapper = shallow(<Logo />);
        const component = wrapper.dive();
  
        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });