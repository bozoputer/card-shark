import React from 'react';
import './styles.css';
import title from './img/header.svg';
import cards from './images';
import Card from './Card';

const App = () => {

  return (
    <>
      <header className="container mx-auto text-center my-8">
        <img className="mx-auto header-img" src={ title } alt="Card Shark logo" />
      </header>
      <main className="container mx-auto text-center flex flex-row flex-wrap">
      <section className="cards flex flex-row flex-wrap">
        { cards.map((card, index) => {
            return <Card front={ card } alt={ `card${ index }` } key={ index } />
        }) }
      </section>
      </main>
    </>
  );
};

export default App;