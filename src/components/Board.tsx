import { useEffect, useRef, useState } from "react";
import Card from "./Cell";
import "./Board.css";
import React from "react";

type BoardProps = {
  cardIds: Array<number>;
};

function Board(props: BoardProps) {
  const [openCards, setOpenCards] = useState<Array<number>>([]);
  const [clearedCards, setClearedCards] = useState<Array<number>>([]);
  const [shouldDisableAllCards, setShouldDisableAllCards] =
    useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout>(setTimeout(() => {}));

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if ((first % 8) + 1 === (second % 8) + 1) {
      setClearedCards((prev) => [...prev, first, second]);
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (id: number) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, id]);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([id]);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout = setTimeout(() => {});
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  const checkIsFlipped = (id: number) => {
    return clearedCards.includes(id) || openCards.includes(id);
  };

  const checkIsInactive = (id: number) => {
    return clearedCards.includes(id);
  };

  return (
    <div className={"board"}>
      {props.cardIds.map((i) => {
        return (
          <Card
            key={i}
            image={`/images/${(i % 8) + 1}.png`}
            id={i}
            isDisabled={shouldDisableAllCards}
            isInactive={checkIsInactive(i)}
            isFlipped={checkIsFlipped(i)}
            onClick={handleCardClick}
          />
        );
      })}
    </div>
  );
}

export default Board;
