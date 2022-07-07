import React from "react";
import "./styles.css";
import shark from "./img/shark.svg";
import club from "./img/club.svg";
import spade from "./img/spade.svg";
import deck from "./data/cards";
import Card from "./Card";
import { useState } from "react";

const App = () => {
  // Add state for drawn cards
  const [drawnCards, setDrawnCards] = useState([]);

  // Add state for card sides
  const [cardSide, setCardSide] = useState("back");

  // Add state for deck count
  const [deckCount, setDeckCount] = useState(52);

  // Reset the deck
  const handleResetDeck = () => {
    setDrawnCards([]);
    setDeckCount(52);
    setCardSide("back");
    deck.unshift(...drawnCards);
  };

  // This function will be called when the user clicks the "Face Down" button
  const handleFaceDown = () => {
    if (drawnCards.length < 52) {
      setCardSide("back");
    } else {
      alert(
        "There are no more cards in the deck! Click 'Reset' to start over."
      );
    }
  };
  // This function will be called when the user clicks the "Face Up" button
  const handleFaceUp = () => {
    if (drawnCards.length < 52) {
      setCardSide("front");
    } else {
      alert(
        "There are no more cards in the deck! Click 'Reset' to start over."
      );
    }
  };

  // Remove the top card from the deck and display the card value and suit
  const handleDrawCard = () => {
    // Do not allow drawing more cards than exist in the deck
    if (drawnCards.length < 52) {
      // Add a card to drawn cards and remove it from the deck
      setDrawnCards([...drawnCards, deck.shift()]);
      setDeckCount(deckCount - 1);
    } else {
      alert("You have already drawn all 52 cards!");
    }
  };

  // Iterate over the cards array and create a new array of Card components
  const displayDeck = deck.map((card) => {
    return (
      <Card
        side={cardSide}
        face={card.face}
        alt={`${card.pip} of ${card.suit}`}
        key={card.id}
        id={card.id}
      />
    );
  });

  const showDrawnCards = drawnCards.map((card) => {
    return (
      <Card
        side={"front"}
        face={card.face}
        alt={`${card.pip} of ${card.suit}`}
        key={card.id}
        id={card.id}
      />
    );
  });

  return (
    <>
      <header className="flex flex-col mx-auto my-8">
        <div className="flex justify-center">
          <img src={club} className="header-icon" alt="" />
          <h1 className="text-center text-3xl mx-2 font-body text-slate-50">
            Card Shark
          </h1>
          <img src={spade} className="header-icon" alt="" />
        </div>
        <img
          src={shark}
          className="shark-logo mx-auto mt-2 mb-8"
          alt="shark logo"
        />
      </header>
      <main className="container mx-auto text-center flex flex-col">
        <section className="w-2/5 mx-auto mb-6" id="controls">
          <p>Controls</p>
          <div className="mx-auto flex justify-around">
            <button
              onClick={handleResetDeck}
              className="rounded px-4 py-2 font-semibold text-sm shadow-sm bg-white"
            >
              Reset
            </button>
            <button className="rounded px-4 py-2 font-semibold text-sm shadow-sm bg-white">
              Shuffle
            </button>
            <button
              className="rounded px-4 py-2 font-semibold text-sm shadow-sm bg-white"
              onClick={handleDrawCard}
            >
              Draw
            </button>
          </div>
        </section>
        <section
          className="w-2/5 mx-auto mb-6 border border-blue-800"
          id="options"
        >
          <p>Options</p>
          <div className="mx-auto flex justify-around">
            <button className="" onClick={handleFaceDown}>
              Face Down
            </button>
            <button className="" onClick={handleFaceUp}>
              Face Up
            </button>
          </div>
        </section>
        <section className="w-2/5 mx-auto mb-6" id="counter">
          <h2 className="text-white">{deckCount} cards remaining in Deck</h2>
        </section>
        <div className="container mx-auto flex">
          <section
            className="w-1/2 cards flex flex-row flex-wrap justify-center"
            id="deck"
          >
            {displayDeck}
          </section>
          <section className="w-1/2 cards flex flex-row flex-wrap justify-center items-baseline">
            {showDrawnCards}
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
