import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { PrimaryTurnTable } = composeStories(stories);

describe("TurnTable Testing", () => {
  test('Testing Success When renders the TurnTable component', () => {
    render(<PrimaryTurnTable />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /the turn goes to \.\./i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', {
      name: /noughty jolly ring/i
    })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', {
      name: /dare to cross/i
    })).toBeInTheDocument();

  });
});
