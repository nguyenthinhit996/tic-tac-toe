import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { isNoughty } from '../../utils';
import { IMAGE, SETTING_GAME } from '../../utils/common';
import { resetBoard } from '../../stores/slice';

function WinnerBoard() {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.board.round);

  const handleResetBoard = () => {
    dispatch(resetBoard());
  };

  return (
    <div className="winner-board">
      <h3>The award goes to..</h3>
      {
        !(round === SETTING_GAME.Board.Columns * SETTING_GAME.Board.Columns) ? (
          <>
            <div className="winner">
              {!isNoughty(round) ? <img src={IMAGE.Nought} alt="" /> : <img src={IMAGE.Cross} alt="" />}
            </div>
            <p className="winner-name">
              {!isNoughty(round) ? 'Noughty Jolly Ring' : 'Dare To Cross'}
            </p>
          </>
        ) : (
          <div className="drawn-winners">
            <div className="winner-images">
              <img src={IMAGE.Nought} alt="" />
              <img src={IMAGE.Cross} alt="" />
            </div>
            <h3>The ones who are peace makers!</h3>
          </div>
        )
}
      <div className="action-buttons">
        <button
          type="button"
          onClick={handleResetBoard}
        >
          Reset

          <i className="fa fa-history" style={{ fontSize: '36px' }} />
        </button>
      </div>
    </div>
  );
}

export default WinnerBoard;
