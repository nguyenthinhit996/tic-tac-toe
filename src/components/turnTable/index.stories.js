import React from 'react';
import { Provider } from 'react-redux';
import TurnTable from '.';
import store from '../../stores/store';

export default {
  title: 'Component/TurnTable',
  component: TurnTable,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const PrimaryTurnTable = {};
