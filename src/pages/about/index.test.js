import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories'; 

const { PrimaryAbout } = composeStories(stories);
 
describe("Page About Test", () => {
    test('Testing Success When render page about', () => {
        const { getByText } = render(<PrimaryAbout />);
        
        const countElement = getByText(/Game: TicTacToe/i);
        expect(countElement).toBeInTheDocument();
      });
});


 