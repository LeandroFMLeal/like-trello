import { GeneralCard } from "../types/board";
import { Card } from "./Card";

interface IColumn {
  id: number;
  title: string;
  cards: GeneralCard[];
}

export const Column = ({ id, title, cards }: IColumn) => {
  return (
    <div className="mt-8 ml-6 flex shrink-0 grow-0 basis-[360px] flex-col rounded-md  bg-blue-100">
      <header className="mb-2 rounded-t-md bg-blue-zodiac-800 p-1 text-center text-sm text-white">
        {title}
      </header>
      <ul className="px-3">
        {cards.map((card) => {
          return <Card card={card} listId={id} />;
        })}
      </ul>
    </div>
  );
};
