import React from 'react';
import { Provider } from 'react-redux';
import WinnerBoard from '.';

import store from '../../stores/store';

export default {
  title: 'Component/WinnerBoard',
  component: WinnerBoard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const PrimaryWinnerBoard = {};
