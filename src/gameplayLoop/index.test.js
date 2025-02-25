import { ACTION_BUTTON } from "../utils/common";
import handlWinner from "./mathematics";

describe("GameLoop Testing", () => {
  test('Testing Success When Computing WinnerBoard', () => {
    let BoardInput = [
      [{ action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Nought }],
      [{ action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Nought }, { action: ACTION_BUTTON.Cross }],
      [{ action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Nought }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }],
      [{ action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Nought }, { action: ACTION_BUTTON.Nought }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }],
      [{ action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Nought }, { action: ACTION_BUTTON.Cross }, { action: ACTION_BUTTON.Cross }],
    ];
    const result = handlWinner(BoardInput, 2, 2);

    expect(result.DownLeftVsUpRight.length).toBeGreaterThanOrEqual(3);
    expect(result.UpVsDown.length).toBeGreaterThanOrEqual(3);
  });
});