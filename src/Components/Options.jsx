import React from "react";
import "./../styles.css";

const Options = () => {
  return (
    <section className="w-2/5 mx-auto mb-6 border border-blue-800" id="options">
      <p>Options</p>
      <div className="mx-auto flex justify-around">
        <button className="">Face Down</button>
        <button className="">Face Up</button>
      </div>
    </section>
  );
}

export default Options;