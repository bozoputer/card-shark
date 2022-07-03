import React from "react";
import './styles.css'
import back from "./img/cards/card-back.png";

const Card = ({ front, alt }) => {
  return (
    <div className="card-cell">
      <div className="card">
        <div className="card__inner">
          <div className="card__front">
            <img src={ back } alt="playing card back" />
          </div>
          <div className="card__back">
            <img src={ front } alt={ alt } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;