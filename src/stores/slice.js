import { createSlice } from '@reduxjs/toolkit';
import { intialData, isNoughty } from '../utils';
import { ACTION_BUTTON } from '../utils/common';

const initialStateData = {
  dataCell: intialData(),
  round: 0,
  winnerFound: false,
  currentRow: undefined,
  currentColumn: undefined,
  isOpenNavbar: false,
  columns: 8,
  rows: 5,
  customRows: 5,
  customColumns: 8,
  isOpenModal: false,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialStateData,
  reducers: {
    markStrikeCell: (state, action) => {
      const { row = 0, column = 0, strike } = action.payload;
      state.dataCell[row][column][strike] = true;
    },
    updateActionCell: (state, action) => {
      const { row = 0, column = 0 } = action.payload;
      state.currentColumn = column;
      state.currentRow = row;
      const typeAction = isNoughty(state.round)
        ? ACTION_BUTTON.Nought
        : ACTION_BUTTON.Cross;
      state.dataCell[row][column].action = typeAction;
    },
    markWinnerFound: (state, action) => {
      state.winnerFound = action.payload.type;
    },
    updateTurnUser: (state) => {
      state.round += 1;
    },
    resetBoard: (state) => {
      state.dataCell = intialData();
      state.round = 0;
      state.winnerFound = false;
      state.currentRow = undefined;
      state.currentColumn = undefined;
    },
    openNavbar: (state, action) => {
      state.isOpenNavbar = action.payload.isOpen;
    },
    customizeBoard: (state, action) => {
      state.customColumns = action.payload.customColumns;
      state.customRows = action.payload.customRows;
    },
    updateRowsColumns: (state, action) => {
      state.columns = action.payload.columns;
      state.rows = action.payload.rows;
    },
    openModal: (state, action) => {
      state.isOpenModal = action.payload.isOpenModal;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  markStrikeCell, updateActionCell, markWinnerFound, updateTurnUser,
  resetBoard, openNavbar, customizeBoard, openModal, updateRowsColumns,
} = boardSlice.actions;

export default boardSlice.reducer;
