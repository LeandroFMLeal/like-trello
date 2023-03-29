import { useDrag, useDrop } from "react-dnd";
import { CARD } from "../constants/board";
import { useDispatch } from "react-redux";
import { move } from "../redux-toolkit/boardReducer";

interface IuseCardDragNDrop {
  cardIndex: number;
  listId: number;
  ref: React.RefObject<HTMLLIElement>;
  canDrag: boolean;
}

interface Item {
  cardIndex: number;
  listId: number;
}

export const useCardDragNDrop = ({
  cardIndex,
  listId,
  ref,
  canDrag,
}: IuseCardDragNDrop) => {
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: CARD,
    item: { cardIndex, listId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag,
  });

  const [, dropRef] = useDrop({
    accept: CARD,
    hover(cardItem: Item, monitor) {
      const fromList = cardItem.listId;
      const toList = listId;

      const from = cardItem.cardIndex;
      const to = cardIndex;
      if (to === -1) return;

      if (from === to && fromList === toList) {
        return;
      }

      const targetSize = ref.current?.getBoundingClientRect();
      if (!targetSize) return;
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();

      if (!draggedOffset) return;

      const draggedTop = draggedOffset.y - targetSize.top;

      if (from < to && draggedTop < targetCenter) return;

      if (from > to && draggedTop > targetCenter) return;

      dispatch(move({ fromList, toList, from, to }));

      cardItem.cardIndex = to;
      cardItem.listId = toList;
    },
  });

  return { dragRef, dropRef, isDragging };
};
