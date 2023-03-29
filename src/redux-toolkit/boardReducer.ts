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
  toList: any;
  from: string;
  to: string;
}

const initialState: BoardState & IMove = {
  board: data,
  fromList: 0,
  toList: "",
  from: "",
  to: "",
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    move: (
      { fromList, toList, from, to, board },
      action: PayloadAction<number>
    ) => {
      produce(board, (draft) => {
        const dragged = draft[fromList].cards[from];
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      });
    },
  },
});

export const { move } = boardSlice.actions;

export default boardSlice.reducer;
