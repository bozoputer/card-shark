import React from "react";
import './../styles.css'
import back from "./../img/cards/card-back.svg";

const Card = ({ face, alt, id, pip, suit, icon }) => {
  return (
    <div className="card-cell">
      <div className="card">
        <div className="card__inner">
          <div className="card__back">
            <img src={ back } alt="playing card back" />
            <span className="pt-2">{ id }</span>
          </div>
          <div className="card__face">
            <img src={ face } alt={ alt } />
            <div className="flex pt-2">
              <span>{ pip }</span>&nbsp;<span> of</span>
              <img src={ icon } alt={ suit } className="suit-icon ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;