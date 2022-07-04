import React from "react";
import "./../styles.css";

const Counter = ({ count }) => {
  return (
    <section className="w-2/5 mx-auto mb-6 border border-stone-50" id="counter">
      <h2>Cards ({ count } remaining)</h2>
    </section>
  );
};

export default Counter;