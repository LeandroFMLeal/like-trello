import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../types/board";
import { getBoard } from "../services/api";
import produce from "immer";

const data = getBoard();

export interface BoardState {
  board: Board;
}

interface IMove {
  fromList: number;
  toList: number;
  from: number;
  to: number;
}

const initialState: BoardState = {
  board: data,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    move: (state, action: PayloadAction<IMove>) => {
      const { fromList, toList, from, to } = action.payload;
      produce(state.board, (draft) => {
        const dragged = draft.columns[fromList].cards[from];

        draft.columns[fromList].cards.splice(from, 1);
        draft.columns[toList].cards.splice(to, 0, dragged);
      });
    },
  },
});

export const { move } = boardSlice.actions;

export default boardSlice.reducer;
