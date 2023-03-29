import { GeneralCard } from "../types/board";
import { Card } from "./Card";

interface IColumn {
  id: number;
  title: string;
  index: number;
  cards: GeneralCard[];
}

export const Column = ({ id, title, cards, index }: IColumn) => {
  return (
    <div
      key={id}
      className="mt-8 ml-6 flex h-full shrink-0 grow-0 basis-[360px] flex-col rounded-md bg-blue-100  pb-10"
    >
      <header className="mb-2 rounded-t-md bg-blue-zodiac-800 p-1 text-center text-sm text-white">
        {title}
      </header>
      <ul className="px-3">
        {cards.map((card, cardIndex) => {
          return (
            <Card
              card={card}
              key={card.id}
              listId={index}
              cardIndex={cardIndex}
            />
          );
        })}
      </ul>
    </div>
  );
};
