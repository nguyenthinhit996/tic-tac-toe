import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_BUTTON, IMAGE } from '../../utils/common';
import { updateActionCell, updateTurnUser } from '../../stores/slice';

const renderTypeClass = {
  horizon: 'finish-horizon-line',
  vertical: 'finish-vertical-line',
  fall: 'finish-fall-slash-line',
  back: 'finish-back-slash-line',
  Nought: 'cell-nought',
  Cross: 'cell-cross',
};

const Cell = ({ row, column }) => {
  const dispatch = useDispatch();
  const { winnerFound, dataCell: board } = useSelector((state) => state.board);

  const handleClickOnEachCell = () => {
    if (!winnerFound) {
      dispatch(updateActionCell({ row, column }));
      dispatch(updateTurnUser());
    }
  };

  const renderInActiveCell = () => (
    <img
      className={`cell ${classNames({ 'disabled-cell': winnerFound })}`}
      alt=""
      onClick={handleClickOnEachCell}
    />
  );

  const renderStrikeComponentCell = (cell = {}) => {
    const imageSrc = cell?.action === ACTION_BUTTON.Cross ? IMAGE.Cross : IMAGE.Nought;
    const elementStrike = [];

    if (cell && typeof cell === 'object') {
      Object.keys(cell).forEach((key) => {
        if (cell[key] === true) {
          const combinedClasses = `${renderTypeClass[key]} ${renderTypeClass[cell.action]}`;
          elementStrike.push(<span className={combinedClasses} />);
        }
      });
    }

    return (
      <div className="cell-container">
        <img src={imageSrc} alt="" className="cell" />
        {elementStrike.map((span) => span)}
      </div>
    );
  };

  const renderCell = (cell) => {
    const renderType = {
      InActive: renderInActiveCell(),
      Nought: renderStrikeComponentCell(cell),
      Cross: renderStrikeComponentCell(cell),
    };

    return renderType[cell?.action] || renderInActiveCell();
  };

  return renderCell(board && board[row][column]);
};

export default Cell;
