import { getBoard } from "../services/api";
import { Column } from "./Column";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const data = getBoard();

export const Board = () => {
  const { columns } = data;
  return (
    <div className="flex  flex-row">
      <DndProvider backend={HTML5Backend}>
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
      </DndProvider>
    </div>
  );
};
