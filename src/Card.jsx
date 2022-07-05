import React from "react";
import './styles.css'
import back from "./img/cards/card-back.svg";

const FrontCard = ({ face, alt, pip, suit }) => {
  return (
    <div className="card-cell flex justify-center items-center mb-3">
      <div className="card">
        <img src={ face } alt={ alt } />
      </div>
    </div>
  );
};
const BackCard = ({ id }) => {
  return (
    <div className="card-cell flex justify-center items-center mb-3">
      <div className="card">
        <img src={ back } alt="playing card back" />
        <span className="pt font-body text-stone-50">{ id }</span>
      </div>
    </div>
  );
};

const Card = ({ side, id, face, alt, pip, suit, icon }) => {
  // Conditionally render the front or back of the card
  return (
    side === "front" ? <FrontCard face={ face } alt={ alt } />
    : "back" ? <BackCard id={ id } />
    : null
  );
};

export default Card;