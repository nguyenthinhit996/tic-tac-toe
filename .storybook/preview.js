/** @type { import('@storybook/react').Preview } */

import "../src/components/board/style.scss";
import "../src/components/turnTable/style.scss";
import "../src/pages/start/style.scss";
import "../src/pages/about/style.scss";
import "../src/components/cells/style.scss";
import "../src/components/winnerBoard/style.scss";
import "../src/components/navbar/style.scss";
import "../src/App.scss";
import "../src/index.scss";

import { Provider } from "react-redux";
import store from '../src/stores/store.js'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],

};

export default preview;
