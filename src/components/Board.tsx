import { useSelector } from "react-redux";
import { Column } from "./Column";
import { RootState } from "../redux-toolkit/store";
import { Board as IBoard } from "../types/board";

export const Board = () => {
  const board: IBoard = useSelector((state: RootState) => state.board);

  return (
    <div className="flex flex-row justify-center gap-20 pt-10">
      {board &&
        board.columns.map((column, index) => {
          return (
            <Column
              title={column.title.toUpperCase()}
              key={column.id}
              index={index}
              id={column.id}
              cards={column.cards}
            />
          );
        })}
    </div>
  );
};
