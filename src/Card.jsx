import React from "react";
import './styles.css'
import back from "./img/cards/card-back.svg";

const Card = ({ face, alt, id, pip, suit, icon }) => {
  return (
    <div className="card-cell flex justify-center items-center w-24 mb-3">
      <div className="card">
        <div className="card__inner">
          <div className="card__back">
            <img src={ back } alt="playing card back" />
            <span className="pt font-body">{ id }</span>
          </div>
          <div className="card__face">
            <img src={ face } alt={ alt } />
            <div className="flex pt">
              <span className="font-body">{ pip }</span>
              <img src={ icon } alt={ suit } className="suit-icon ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;