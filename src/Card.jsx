import React from "react";
import './styles.css'
import back from "./img/cards/card-back.png";

const Card = ({ front, alt }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__front">
          <img src={ front } alt={ alt } />
        </div>
        <div className="card__back">
          <img src={ back } alt="playing card back" />
        </div>
      </div>
    </div>
  );
};

export default Card;