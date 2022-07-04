import React from 'react';
import './styles.css';
import title from './img/header.svg';
import cards from './data/cards';
import Card from './Components/Card';
import Controls from './Components/Controls';
import Options from './Components/Options';
import Counter from './Components/Counter';
import { useState } from 'react';

const App = () => {

  // Iterate over the cards array and create a new array of Card components
  const displayCards = cards.map((card, index) => {
    return (
      <Card face={ card.cover } alt={ `${ card.pip } of ${ card.suit }` } key={ card.id } id={ card. id } pip={ card.pip } icon={ card.icon} />
    );
  });

  return (
    <>
      <main className="container mx-auto text-center flex flex-col">
        <header className="container mx-auto text-center my-8">
          <img className="mx-auto header-img" src={ title } alt="Card Shark logo" />
        </header>
        <Controls />
        <Options />
        <Counter />
        <section className="cards flex flex-row flex-wrap">
          { displayCards }
        </section>
      </main>
    </>
  );
};

export default App;