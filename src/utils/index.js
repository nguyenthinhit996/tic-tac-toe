import { ACTION_BUTTON, SETTING_GAME } from './common';

export const isNoughty = (turn) => turn % 2 === 0;

export const intialData = () => {
  const array2D = [];

  Array.from({ length: SETTING_GAME.Board.Rows }).forEach(() => {
    const array1D = [];
    Array.from({ length: SETTING_GAME.Board.Columns }).forEach(() => {
      array1D.push({
        action: ACTION_BUTTON.InActive,
        horizon: false,
        vertical: false,
        fall: false,
        back: false,
      });
    });
    array2D.push(array1D);
  });

  return array2D;
};
