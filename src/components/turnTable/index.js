import React from 'react';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { isNoughty } from '../../utils';
import { IMAGE } from '../../utils/common';

function TurnTable() {
  const round = useSelector((state) => state.board.round);

  return (
    <div className="turn-table-container">
      <table className="turn-table">
        <thead>
          <tr>
            <td colSpan="2">
              <h2>The turn goes to ..</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Noughty Jolly Ring</th>
            <th>Dare To Cross</th>
          </tr>
          <tr>
            <td className={`td-brick-red ${classNames({ blur: !isNoughty(round) })}`}>
              {isNoughty(round) && <img src={IMAGE.Nought} alt="" />}
            </td>
            <td
              className={`td-brick-white ${classNames({ blur: isNoughty(round) })}`}
            >
              {!isNoughty(round) && <img src={IMAGE.Cross} alt="" />}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default TurnTable;
