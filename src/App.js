import React from 'react';
import './styles.css';
import title from './img/header.svg';
import shark from './img/shark.svg';
import club from './img/club.svg';
import deck from './data/cards';
import Card from './Card';
import { useState } from 'react';

const App = () => {
  // Add state for drawn cards
  const [drawnCards, setDrawnCards] = useState([]);

  // Remove the top card from the deck and display the card value and suit
  const handleDrawCard = (e) => {
    e.preventDefault();
    // Do not allow drawing more cards than exist in the deck
    if (drawnCards.length < 52) {
      // Add a card to drawn cards and remove it from the deck
      setDrawnCards(function() {
        return [...drawnCards, deck.shift()];
      });
      // Remove the card from the cards array
      // cards.shift();
    } else {
      alert('You have already drawn all 52 cards!');
    }
  };

  // Iterate over the cards array and create a new array of Card components
  const displayCards = deck.map((card, index) => {
    return (
      <Card face={ card.face } alt={ `${ card.pip } of ${ card.suit }` } key={ card.id } id={ card. id } pip={ card.pip } icon={ card.icon} />
    );
  });

  const showDrawnCards = drawnCards.map((card, index) => {
    return (
      <Card face={ card.face } alt={ `${ card.pip } of ${ card.suit }` } key={ card.id } id={ card. id } pip={ card.pip } icon={ card.icon} />
    );
  });
  return (
    <>
      <header className="flex flex-col w-2/5 mx-auto my-8">
        <div className="flex justify-center">
          <img src={ club } className="header-icon" />
          <h1 className="text-center text-3xl mx-2 font-body text-slate-50">Card Shark</h1>
          <img src={ club } className="header-icon" />
        </div>
        <img src={ shark } className="shark-logo mx-auto mt-2 mb-8" alt="shark logo" />
      </header>
      <main className="container mx-auto text-center flex flex-col">
        <section className="w-3/5 mx-auto border border-red-700" id="controls">
          <p>Controls</p>
          <div className="mx-auto flex justify-around">
            <button className="">Reset</button>
            <button className="">Shuffle</button>
            <button className="" onClick={ handleDrawCard }>Draw</button>
          </div>
        </section>
        <section className="cards flex flex-row flex-wrap justify-center">
          { showDrawnCards }
        </section>
        <section className="w-2/5 mx-auto mb-6 border border-blue-800" id="options">
          <p>Options</p>
          <div className="mx-auto flex justify-around">
            <button className="">Face Down</button>
            <button className="">Face Up</button>
          </div>
        </section>
        <section className="w-2/5 mx-auto mb-6 border border-stone-50" id="counter">
          <h2>Cards ({ } remaining)</h2>
        </section>
        <section className="cards flex flex-row flex-wrap justify-center">
          { displayCards }
        </section>
      </main>
    </>
  );
};

export default App;