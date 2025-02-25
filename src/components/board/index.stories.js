import React from 'react';
import { Provider } from 'react-redux';
import Board from '.';
import store from '../../stores/store';

export default {
  title: 'Component/Board',
  component: Board,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const PrimaryBoard = {};
