import { Column } from "./Column";

export const Board = () => {
  return (
    <div className="flex  flex-row">
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
};
