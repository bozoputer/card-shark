import React from "react";
import "./../styles.css";

const Controls = () => {
  return (
    <section className="w-2/5 mx-auto mb-6 border border-red-700" id="controls">
      <p>Controls</p>
      <div className="mx-auto flex justify-around">
        <button className="">Reset</button>
        <button className="">Shuffle</button>
        <button className="">Draw</button>
      </div>
    </section>
  );
};

export default Controls;