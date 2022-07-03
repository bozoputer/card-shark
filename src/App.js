import React from 'react';
import './styles.css';
import title from './img/card-shark.png';
import cards from './images';
import Card from './Card';

console.log(cards);

const App = () => {
  return (
    <div className="wrapper">
      <header className="container mx-auto text-center">
        <img className="mx-auto" src={ title } alt="Card Shark" />
      </header>
      <main className="container mx-auto text-center border-2 border-blue-700 flex flex-row flex-wrap">
      <section className="cards flex flex-row flex-wrap">
        { cards.map((card, index) => {
            return <Card front={ card } alt={ `card${ index }` } key={ index } />
        }) }
      </section>
      </main>
    </div>
  );
};

export default App;