// function StatePractice(name) {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay = "none";

//   if (hours > 4 && hours < 12) {
//     timeOfDay = "morning";
//   }
//   else if (hours > 12 && hours < 17) {
//     timeOfDay = "afternoon";
//   }
//   else if (hours > 17 && hours < 20) {
//     timeOfDay = "evening";
//   }
//   else {
//     timeOfDay = "night";
//   }

//   console.log(`Good ${timeOfDay}, ${name}`); // use the correct template literals

// }

// StatePractice("Tanvi");

import React from "react";

export default function StatePractice() {
  // returns an array with two elements: state variable and setter function
  // const result = React.useState("Hello"); // anything within these () is the default value of the state variable you want to save

  // the convention to write the second elemenet in [] is to start with "set" then the name of the first element
  const [result, setResult] = React.useState("Hello"); // the setResult is a function, that provides the ability to change state if we want it to.

  const [count, setCount] = React.useState(0); // create new state. catch what React.useState() returns (an array) like const [] and destructure the array that it returns.

  // defining functions such as those below is not the ideal way
  function handleClick() {
    setResult("No"); // provide a new version of state.
  }

  // below we are directly using the state. instead pass a callback function.
  // function counter() {
  //   setCount(count+1); // don't do count++ or ++count because we are not modifying the value of count. this is the function of setCount.
  // }

  function counter() {
    setCount(function (oldValue) {
      return oldValue + 1;
    });

    function counter() {
      setCount((prevCount) => prevCount + 1);
    }

    // or use arrow functions

    // setCount(prevCount => prevCount + 1);
  }

  console.log(result);

  // below is an array state
  const [thingsArray, setThingsArray] = React.useState(["Thing1", "Thing2"]);

  function addItem() {
    // prevThingsArray is a reference to the main array.
    return setThingsArray((prevThingsArray) => [
      ...prevThingsArray,
      `Thing ${prevThingsArray.length + 1}`,
    ]); // ... is a spread operator. it is used to create a new array that includes all the elements from the previous array.
  }

  return (
    <div>
      <h1>Is state important to know?</h1>
      <div onClick={handleClick}>
        {/* <p>{result[0] returns H!}!</p> */}
        <p>{result}!</p>

        <button
          className="bg-gray-700 text-white p-4 rounded-lg"
          onClick={counter}
        >
          Count is {count}
        </button>

        <button onClick={addItem}>{thingsArray} </button>
      </div>
    </div>
  );
}

// we are using states here to demonstrate how react components can render dynamic
// content based on the state of the application.
// the value of result[0] is rendered inside <p>. if the state were to change, react would
// automatically re-render the component, updating the displayed value.
// useful for creating dynamic user interfaces.
