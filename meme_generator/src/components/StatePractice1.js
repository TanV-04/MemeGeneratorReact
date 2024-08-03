import React, { useState } from "react";

// export default function StatePractice1() {
//   const [count, setCount] = React.useState(0);

//   function counter() {
//     setCount(function () {
//       return count + 1;
//     });
//   }

//   return (
//     <div>
//       <button onClick={counter}>count is {count}</button>
//     </div>
//   );
// }

export default function StatePractice1() {
  // const isGoingOut = true;

  // let answer = isGoingOut === true ? "yes" : "no"; // ternary (if isGoingOut is true answer=yes else no)

  const [isGoingOut, setIsGoingOut] = React.useState(true); // useState is a hook. the isGoingOut variable holds the current state of whether the user feels like going out (true or false)
  // set isGoingOut is the function used to update the isGoingOut state.

  function handleClick() {
    // prevState represents the current state value of isGoingOut
    // setIsGoingOut(prevState => prevState ? false : true);
    setIsGoingOut((prevState) => !prevState);
  }

  return (
    <div>
      <h1>do i feel like going out tonight?</h1>
      <div onClick={handleClick}>
        {/* <h1>{answer}</h1> */}
        {/* <h1>{isGoingOut === true ? "yes" : "no"}</h1>  */}
        <h1>{isGoingOut ? "yes" : "no"}</h1>
      </div>
    </div>
  );
}
