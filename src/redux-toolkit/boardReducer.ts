import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../types/board";
import { getBoard } from "../services/api";
import produce from "immer";

const data = getBoard();

interface IMove {
  fromList: number;
  toList: number;
  from: number;
  to: number;
}

const initialState: Board = {
  name: data.name,
  columns: data.columns,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    move: (state, action: PayloadAction<IMove>) => {
      const { fromList, toList, from, to } = action.payload;
      const newColumns = produce(state, ({ columns: draft }) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      });

      state.columns = newColumns.columns;
    },
  },
});

export const { move } = boardSlice.actions;

export default boardSlice.reducer;
