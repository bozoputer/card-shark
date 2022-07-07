import React from "react";
import "./styles.css";
import back from "./img/cards/card-back.svg";

const FrontCard = ({ face, alt }) => {
  return (
    <div className="card-cell flex justify-center items-center mb-3">
      <div className="card">
        <img src={face} alt={alt} />
      </div>
    </div>
  );
};
const BackCard = ({ id }) => {
  return (
    <div className="card-cell flex justify-center items-center mb-3">
      <div className="card">
        <img src={back} alt="playing card back" />
        <span className="pt font-body text-stone-50 text-sm">Card {id}</span>
      </div>
    </div>
  );
};

const Card = ({ side, id, face, alt }) => {
  // Conditionally render the front or back of the card
  if (side === "front") {
    return <FrontCard face={face} alt={alt} />;
  }
  if (side === "back") {
    return <BackCard id={id} />;
  }
};

export default Card;
