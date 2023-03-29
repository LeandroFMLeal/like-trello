import {
  BsBriefcaseFill,
  BsClipboardDataFill,
  BsFillClipboard2DataFill,
  BsFillEyeFill,
} from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { GeneralCard } from "../types/board";
import { useRef } from "react";
import { useCardDragNDrop } from "../hooks/useCardDragNDrop";

interface ICard {
  card: GeneralCard;
  listId: number;
  cardIndex: number;
}

export const Card = ({ card, cardIndex, listId }: ICard) => {
  const ref = useRef<HTMLLIElement>(null);

  const { dragRef, dropRef, isDragging } = useCardDragNDrop({
    cardIndex,
    listId,
    ref,
    canDrag: card.canDrag,
  });

  dragRef(dropRef(ref));

  return (
    <>
      {isDragging && (
        <div className="border-black mb-12 h-36 border-spacing-4 cursor-grabbing rounded-md border-4 border-dashed bg-blue-200"></div>
      )}
      {!isDragging && card.canDrag && (
        <li ref={ref} className="mb-12 h-36 cursor-grab rounded-md  text-sm ">
          <div className="h-4 rounded-t-md bg-gradient-to-r from-blue-900 to-java-800 "></div>
          <div className="grid grid-cols-3 bg-blue-50 px-1 py-3 shadow-lg">
            <div className="h-16 pl-1 text-tiny">
              <div className="mb-1 flex h-5 w-24 flex-nowrap items-center rounded-lg bg-black-400 px-1 ">
                <span className="mr-1 h-2 w-2 rounded-full bg-black-300" />
                <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap pb-[0.13rem] text-xs text-blue-100">
                  {card.company}
                </div>
              </div>
              <div className="mb-1 flex h-5 w-24 flex-nowrap items-center rounded-lg bg-black-400 px-1 ">
                <span className="mr-1 h-2 w-2 rounded-full bg-black-300" />
                <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-blue-100">
                  {card.user}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-1 text-xsm">
              <div className="flex h-5 w-8 items-center justify-evenly rounded-md bg-black-400 text-blue-zodiac-100">
                <BsFillEyeFill />
                <span>{card.views}</span>
              </div>
              <div className="flex h-5 w-8 items-center justify-evenly rounded-md bg-black-400 text-blue-zodiac-100">
                <BsClipboardDataFill />
                <span>{card.proposals}</span>
              </div>
            </div>
            <div className="flex justify-end pr-1 text-end text-xsm text-blue-900">
              {card.proposalMin}
              <br />~ {card.proposalMax}
            </div>
            <div className="h-16"></div>
            <div className="flex h-16 flex-col items-center justify-between">
              <div className="-translate-y-3 text-lg font-semibold text-black-500">
                {card.ticket}
              </div>
              <div className="flex h-5 w-16 flex-nowrap items-center justify-center rounded-lg bg-black-400 px-1 text-blue-100 ">
                <BiTimeFive />
                <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-tiny ">
                  {card.daysLeft} dias
                </span>
              </div>
            </div>
            {card.labels && (
              <div className="flex h-16 flex-row items-end justify-end">
                {card.labels.find((item) => item === "briefcase") && (
                  <div className="mask mask-hexagon-2	flex h-7 w-7 translate-x-1 items-center justify-center border-blue-700 bg-blue-400 text-center text-white">
                    <BsBriefcaseFill />
                  </div>
                )}
                {card.labels.find((item) => item === "money") && (
                  <div className="mask mask-hexagon-2	flex h-7 w-7 -translate-y-3 items-center justify-center border-blue-700 bg-blue-400 text-center text-white">
                    <GiReceiveMoney />
                  </div>
                )}
                {card.labels.find((item) => item === "report") && (
                  <div className="mask mask-hexagon-2	flex h-7 w-7 -translate-x-1 items-center justify-center border-blue-700 bg-blue-400 text-center text-white">
                    <BsFillClipboard2DataFill />
                  </div>
                )}
              </div>
            )}
          </div>
        </li>
      )}
      {!card.canDrag && <li ref={ref} className="h-1"></li>}
    </>
  );
};
