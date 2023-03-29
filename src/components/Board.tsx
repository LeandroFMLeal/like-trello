import { getBoard } from "../services/api";
import { Column } from "./Column";

const data = getBoard();

export const Board = () => {
  const { columns } = data;
  return (
    <div className="flex  flex-row">
      {columns &&
        columns.map((column) => {
          return (
            <Column
              title={column.title.toUpperCase()}
              key={column.id}
              id={column.id}
              cards={column.cards}
            />
          );
        })}
    </div>
  );
};
