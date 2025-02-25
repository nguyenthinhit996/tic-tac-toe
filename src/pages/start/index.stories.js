import React from 'react';
import { Provider } from 'react-redux';
import TicTacToe from '.';
import store from '../../stores/store';

export default {
  title: 'Pages/TicTacToe',
  component: TicTacToe,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],

};

export const PrimaryTicTacToe = {};
