import {
  BsBriefcaseFill,
  BsClipboardDataFill,
  BsFillClipboard2DataFill,
  BsFillEyeFill,
} from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { GeneralCard } from "../types/board";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

interface ICard {
  card: GeneralCard;
  listId: number;
}

export const Card = ({ card, listId }: ICard) => {
  const ref = useRef();
  // const { move } = ;
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item: any, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listId;

      const draggedIndex = item.index;
      const targetIndex = card.id;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      // if (ref.current) {
      const targetSize = ref.current?.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;
      // }

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  return (
    <li className="mb-2 grid h-36 grid-cols-3 rounded-md bg-blue-50 p-1 text-sm shadow-md">
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
    </li>
  );
};
