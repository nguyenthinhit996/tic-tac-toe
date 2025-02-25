
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';

const { PrimaryTicTacToe } = composeStories(stories);

describe("Page Game Test", () => {

  test('Testing Success When user click cross and nought and nought winning', async () => {
    const { container } = render(<PrimaryTicTacToe />);

    const firstRow = container.getElementsByClassName('board-row')[0];
    const columns = firstRow.childNodes;
    const secondRow = container.getElementsByClassName('board-row')[1];
    const columns2 = secondRow.childNodes;

    // First row
    // Nought in position 0 1 2 (Winning guy)
    // Second row
    // Cross in position 0 1

    await userEvent.click(columns[0]);
    await waitFor(() => expect(container.getElementsByClassName("cell-container")).not.toBeNull());
    await waitFor(() => expect(columns[0].firstChild.nodeName).toEqual("IMG"));

    await userEvent.click(columns2[0]);
    await waitFor(() => expect(container.getElementsByClassName("cell-container").length).toBeGreaterThanOrEqual(2));
    await waitFor(() => expect(columns2[0].firstChild.nodeName).toEqual("IMG"));

    await userEvent.click(columns[1]);
    await waitFor(() => expect(container.getElementsByClassName("cell-container").length).toBeGreaterThanOrEqual(3));
    await waitFor(() => expect(columns[1].firstChild.nodeName).toEqual("IMG"));

    await userEvent.click(columns2[1]);
    await waitFor(() => expect(container.getElementsByClassName("cell-container").length).toBeGreaterThanOrEqual(4));
    await waitFor(() => expect(columns2[1].firstChild.nodeName).toEqual("IMG"));

    await userEvent.click(columns[2]);
    await waitFor(() => expect(container.getElementsByClassName("cell-container").length).toBeGreaterThanOrEqual(5));
    await waitFor(() => expect(columns[2].firstChild.nodeName).toEqual("IMG"));

    expect(screen.getByRole('button', {
      name: /Reset/i
    }))
  });
});
