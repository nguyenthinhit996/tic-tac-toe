
import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories'; 

const { PrimaryNavbar } = composeStories(stories);
 
describe("Navbar Testing", () => {
    test('Testing Success When renders the Navbar component', () => {
        render(<PrimaryNavbar />);
        
        expect(screen.getByText(/tic tac toe/i)).toBeInTheDocument();
        expect(screen.getByText(/Start/i)).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /burger/i })).toBeInTheDocument();
      });
});


 