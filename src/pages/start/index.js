import React from 'react';

import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Board from '../../components/board/index';
import TurnTable from '../../components/turnTable/index';
import WinnerBoard from '../../components/winnerBoard/index';
import { IMAGE, SETTING_GAME } from '../../utils/common';

function TicTacToe() {
  const winnerFound = useSelector((state) => state.board.winnerFound);
  const rounds = useSelector((state) => state.board.round);
  const isDrawn = rounds === SETTING_GAME.Board.Columns * SETTING_GAME.Board.Rows;

  return (
    <div className="tic-tac-toe">
      <div className="container">
        <Board />
        {(winnerFound || isDrawn) ? (
          <WinnerBoard />
        ) : (
          <TurnTable />
        )}
        <img alt="" className={classNames({ 'ko-show': winnerFound || isDrawn, 'ko-hide': !winnerFound && !isDrawn })} src={IMAGE.ko} />
      </div>
    </div>
  );
}

export default TicTacToe;
