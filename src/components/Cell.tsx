import React from "react";
import "./Cell.css";

type CardProps = {
  image: string;
  onClick: (id: number) => void;
  id: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
};

function Cell(props: CardProps) {
  const back = "/images/back.jpg";

  const handleClick = () => {
    !props.isFlipped && !props.isDisabled && props.onClick(props.id);
  };

  return (
    <div
      className={`card ${props.isFlipped && "is-flipped"} ${
        props.isInactive && "is-inactive"
      }`}
      onClick={handleClick}
    >
      <div className="card-face">
        <img src={back} alt="card backside" />
      </div>
      <div className="card-face card-back-face">
        <img src={props.image} alt="card" />
      </div>
    </div>
  );
}

export default Cell;
