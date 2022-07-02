import React from 'react';
import './styles.css';
import club from './img/club-01.png';

const App = () => {
  return (
    <div className="bg-slate-200 wrapper">
      <header className="container mx-auto text-center border-2 border-red-700">
        <h1>The Card Shark</h1>
      </header>
      <main className="container mx-auto text-center border-2 border-blue-700">
        <img src={ club } alt="club" className="card" />
      </main>
    </div>
  );
};

export default App;