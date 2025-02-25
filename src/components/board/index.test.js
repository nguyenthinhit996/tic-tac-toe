import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './index.stories';
import { SETTING_GAME } from '../../utils/common';

const { PrimaryBoard } = composeStories(stories);

describe('Board Testing', () => {
  test('Testing Success When renders the Board component with square sharp', () => {
    const { container } = render(<PrimaryBoard />);
    
    expect(container.firstChild.classList.contains('ttt-board')).toBe(true);
    const containerElm = container.firstChild;
    expect(containerElm.childNodes.length).toEqual(SETTING_GAME.Board.Rows);
    const rowEle = containerElm.childNodes[0];
    expect(rowEle.classList.contains('board-row')).toBe(true);
    expect(rowEle.childNodes.length).toEqual(SETTING_GAME.Board.Columns);

  });
});
