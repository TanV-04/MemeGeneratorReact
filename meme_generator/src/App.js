import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import boxesData from "./boxesData";
import Box from "./Box";
import PropPractice from "./components/PropPractice";
import Body from "./components/Body";
import Joke from "./components/Joke";
import SignUpLetter from "./components/SignUpLetter";

function App(props) {
  function toggle(id) {
    alert(id);
  }

  // const [user, setUser] = React.useState("Joe");

  // this is a styles object. this inline style will be applied to each box
  // it is benefical to use a styles object because you dont necessarily have to have a hardcoded "black" value
  const [squares, setSquares] = React.useState(boxesData);

  // let num = squares.length % 2 == 0 ? "#33FFC6" : "#cccccc"; // ternary for if the number of squares is even, set it to a cyan color else grey

  let bl = props.darkMode ? "#222222" : "#cccccc";

  const styles = {
    backgroundColor: bl, // props.darkMode ? "#222222" : "#cccccc" (rather than using a variable)
  };

  // initialize square state with boxesData. squares is an array of objects where each object represents a box with an 'id' and 'on' properties.

  // map over squares array to create an array of <div> elements.
  // each div will have a style object, a uniqye key (which helps React efficiently update and render the elements)
  const sqaureElements = squares.map((square) => (
    // <div style={styles} className="box" key={square.id} ></div>
    <Box on={square.on} key={square.id} toggle={toggle} /> // make sure to pass the same prop name "toggle"
  ));

  // render the JSX
  return (
    <div className="App">
      <Header />
      <Meme />
      {/* <PropPractice user = {user} />
      <Body user = {user} /> */}

      {/* render the squares */}
      {/* <div className="p-3">{sqaureElements}</div> */}

      {/* <Joke punchline = "i got my daughter a fridge for her birthday. i cant wait to see her face light up when she opens it" />
      <Joke punchline = "How did the hacker escape the police? He ransomware." />
      <Joke punchline = "why dont pirates travel on mountain roads? Scurvy." /> */}
{/* 
      <Joke />
      <hr className="border-4 border-gray-800 m-9" />
      <SignUpLetter /> */}

    </div>
  );
}

export default App;
