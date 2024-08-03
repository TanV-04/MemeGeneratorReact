import React, { useState } from "react";
import boxesData from "./boxesData";

export default function Box({ on, id, toggle }) {
  const [squares, setSquares] = React.useState(boxesData);

  //creating a new state
  const [determine, setDetermine] = React.useState(on); // pass the "on" prop
 
  function handleClick() {
    // alert("button is clicked!");
    setDetermine((prevState) => !prevState); // toggle the state

    // toggle(id);
  }

  let bl = determine ? "#222222" : "transparent";
  const styles = {
    backgroundColor: bl,
  };

  return (
    <div>
      <div
        style={styles}
        className="box"
        key={squares.id}
        // onClick={() => toggle(on.id)}
        onClick={handleClick}
      ></div>
    </div>
  );
}
