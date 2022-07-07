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

  // Add state for card sides (back vs front)
  const [cardSide, setCardSide] = useState("back");

  // Add state for deck count
  const [deckCount, setDeckCount] = useState(52);

  // Add state for deck (in-order vs. shuffled)
  const [deckState, setDeck] = useState("ordered");

  // Shuffle the deck
  const handleShuffleDeck = () => {
    return deck.sort(() => Math.random() - 0.5);
  };

  // Reset the deck
  const handleResetDeck = () => {
    setDrawnCards([]);
    setDeckCount(52);
    setCardSide("back");
    deck.unshift(...drawnCards);
    return cards("ordered");
  };

  // This function will be called when the user clicks the "Face Down" button
  const handleFaceDown = () => {
    if (drawnCards.length < 52) {
      setCardSide("back");
    } else {
      alert("There are no cards in the deck! Click 'Reset' to start over.");
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

  // Remove the top card from the deck and display the card rank and suit
  const handleDrawCard = () => {
    // Do not allow drawing more cards than exist in the deck
    if (drawnCards.length < 52) {
      // Add a card to drawn cards and remove it from the deck
      setDrawnCards([...drawnCards, deck.shift()]);
      setDeckCount(deckCount - 1);
    } else {
      alert("All 52 cards have been drawn! Click 'Reset' to start over.");
    }
  };

  // Iterate over the deck array and sort in order or shuffle, and return an array of Card components
  const cards = (deckState) => {
    if (deckState === "ordered") {
      deck.sort((a, b) => a.id - b.id);
    } else {
      deck.sort(() => Math.random() - 0.5);
    }
    return deck.map((card) => {
      return (
        <Card
          side={cardSide}
          face={card.face}
          alt={`${card.rank} of ${card.suit}`}
          key={card.id}
          id={card.id}
        />
      );
    });
  };

  // Iterate over the drawn cards array and return a new array of Card components representing the drawn cards
  const showDrawnCards = drawnCards.map((card) => {
    return (
      <Card
        side={"front"}
        face={card.face}
        alt={`${card.rank} of ${card.suit}`}
        key={card.id}
        id={card.id}
      />
    );
  });

  return (
    <>
      <header className="flex flex-col mx-auto mt-6">
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
        <section className="w-1/6 mx-auto mb-6" id="controls">
          <p className="text-xl mb-2 text-white font-body">Controls</p>
          <div className="mx-auto flex justify-around mb-4">
            <button
              onClick={() => {
                handleResetDeck();
                setDeck("ordered");
              }}
              className="rounded px-4 py-2 font-semibold text-sm shadow-sm bg-white hover:bg-zinc-900 hover:text-white"
            >
              Reset
            </button>
            <button
              onClick={() => {
                handleShuffleDeck();
                setDeck({ deckState: "shuffled" });
              }}
              className="rounded px-4 py-2 font-semibold text-sm shadow-sm bg-white hover:bg-zinc-900 hover:text-white"
            >
              Shuffle
            </button>
            <button
              className="rounded px-4 py-2 font-semibold text-sm shadow-sm bg-white hover:bg-zinc-900 hover:text-white"
              onClick={handleDrawCard}
            >
              Draw
            </button>
          </div>
          <p className="text-xl mb-2 text-white font-body">Options</p>
          <div className="mx-auto flex justify-around">
            <button
              className="rounded px-4 py-2 font-semibold text-sm shadow-sm bg-white hover:bg-zinc-900 hover:text-white"
              onClick={handleFaceDown}
            >
              Face Down
            </button>
            <button
              className="rounded px-4 py-2 font-semibold text-sm shadow-sm bg-white text-red-700 hover:bg-red-700 hover:text-white"
              onClick={handleFaceUp}
            >
              Face Up
            </button>
          </div>
          <p className="text-white text-xl mt-6 my-4">
            {deckCount} cards in the deck
          </p>
        </section>
        <div className="container mx-auto flex">
          <section
            className="w-1/2 cards flex flex-row flex-wrap justify-center pr-3 border-r border-white"
            id="deck"
          >
            {cards(deckState)}
          </section>
          <section className="w-1/2 cards flex flex-row flex-wrap justify-center items-baseline pl-3">
            {showDrawnCards}
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
