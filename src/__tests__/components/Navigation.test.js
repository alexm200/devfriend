import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Navigation from '../../components/navigation/Navigation';

const mockStore = configureStore();
const initialState = {
  menuItems: [
    {
        dateCreated: "2019-05-21T10:36:04.595Z",
        hasDivider: false,
        icon: "",
        isHeader: false,
        order: 1,
        text: "",
        userId: "5ce3d418848c46165880648c",
        _id: "5ce3d494848c46165880648d",
    },
    {
        dateCreated: "2019-05-21T13:06:53.489Z",
        hasDivider: false,
        icon: "",
        isHeader: false,
        order: 2,
        text: "",
        userId: "5ce3d418848c46165880648c",
        _id: "5ce3f7ed848c46165880648e",
    },
  ],
};
const store = mockStore(initialState);

describe('<Navigation />', () => {
    test('dispatches event to show the menu Items', () => {
      const wrapper = shallow(<Navigation store={store} />);
      const component = wrapper.dive();
  
      //component.find(Avatar).props().onPress();
  
      expect(store.getActions()).toMatchSnapshot();
    });
});