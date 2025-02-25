/*eslint-disable*/
import React from 'react';
import { useSelector } from 'react-redux';

import Cell from '../cells/index';
import { SETTING_GAME } from '../../utils/common';
import { HandlWinnerActions } from '../../gameplayLoop/winner';

function Board() {
  const { currentRow, currentColumn } = useSelector((state) => state.board);
  HandlWinnerActions(currentRow, currentColumn);

  const renderColumns = (row) => Array.from({ length: SETTING_GAME.Board.Columns })
    .map((_, index) => (
      <Cell
        row={row}
        column={index}
        key={`row-${row}-column-${index}`}
      />
    ));

  const renderRows = () => Array.from({ length: SETTING_GAME.Board.Rows })
    .map((_, index) => (
      <div className="board-row" key={`row-${index}`}>
        {renderColumns(index)}
      </div>
    ));

  return <div className="ttt-board">{renderRows()}</div>;
}

export default Board;
