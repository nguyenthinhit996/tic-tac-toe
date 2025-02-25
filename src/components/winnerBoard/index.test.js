import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { PrimaryWinnerBoard } = composeStories(stories);

describe("WinnerBoard Testing", () => {
  test('Testing Success When renders the WinnerBoard component', () => {
    render(<PrimaryWinnerBoard />);

    expect(screen.getByRole('heading', {
      name: /the award goes to\.\./i
    })).toBeInTheDocument();
    expect(screen.getByRole('button', {
      name: /reset/i
    })).toBeInTheDocument();
    expect(screen.getByText(/dare to cross/i)).toBeInTheDocument();
  });
});


