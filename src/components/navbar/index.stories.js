import React from 'react';
import { Provider } from 'react-redux';
import Navbar from '.';
import store from '../../stores/store';

export default {
  title: 'Component/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const PrimaryNavbar = {};
