import React, { useState } from "react";

export default function Joke(props) {
  // console.log(props);

  // const { punchline } = props;

  // const [isShown, setIsShown] = React.useState(false);

  // function handleClick() {
  //   // alert(isShown);
  //   setIsShown(prevState => !prevState) // we need to know the previous state
  // }

  // // {} this is JSX syntax, that conditionally renders the <p> element containing the punchline only when isShown is true.
  // return (
  //   <div className="font-semibold">
  //     {isShown && <p className="mt-4">{props.punchline}</p>}
  //     {/* {isShown && <button onClick={handleClick}> Hide punchline</button>}
  //     {isShown && <button onClick={handleClick}> Hide punchline</button>} */}

  //     <button onClick={handleClick}> {isShown ? "Hide" : "Show"} punchline</button>
  //   </div>
  // )

  const [messages, setMessages] = React.useState(["a", "b"]);

  function handleClick() {
    setMessages([]); // initially set the messages array to empty
  }

  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");

  // create a form object (for all the fieldsv)
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  // console.log(firstName);

  function handleChange(event) {
    // event is the event object passed to the handleChange function. this object contains the information about the event that has occured (in this case, a change in the input value)

    // alert("changed!");
    // setFirstName();
    // console.log(event.target.value); // console.log the current value of the input field

    // setFirstName(event.target.value);
    // setLastName(event.target.value);

    // a way to manage form state in react
    const { name, value, type, checked } = event.target; // event.target is an event handler function. it refers to the HTML element that triggered the event. it helps easily access the properties of the event target without having to repeatedly reference event.target.propertyName.

    // if (name === "firstName") {
    //   setFirstName(value);
    // } else if (name === "lastName") {
    //   setLastName(value);
    // }

    // better way than create two separate states for firstName and lastName
    setFormData((prevFormData) => ({
      ...prevFormData,
      // [event.target.name]: event.target.value,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(event.target.value);
  }

  function handleChangeOnSubmit(event) {
    const { name, value, type, checked } = event.target;

    if (name === "firstName" || name === "lastName" || name === "comments") {
      // Regex to allow only letters and spaces
      const validStringPattern = /^[A-Za-z\s]*$/;

      if (!validStringPattern.test(value)) {
        alert("please enter valid name");
        return;
      }
    }
  }

  function clearFields(event) {
    event.preventDefault();
    // setFirstName("");
    // setLastName("");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: false,
      employment: "",
      favColor: "",
    });
  }

  function onClickSubmit() {
    alert("submitted!!");
  }

  function handleSubmit(event) {
    event.preventDefault(); // won't refresh the page and re-renders the app with the default values.
    console.log(formData); // console.log the formData object
  }

  // the number 0 is considered a falsey statement
  return (
    <div>
      {messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length === 1 ? "message" : "messages"}!
        </h1>
      )}

      {/* {messages.length && <h1>you have {messages.length} unread messages</h1>} */}

      <button
        className="mt-2 bg-amber-400 p-4 rounded-xl shadow-md"
        onClick={handleClick}
      >
        Clear messages
      </button>

      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <input
            name="firstName" // name property
            value={formData.firstName} // controlled input (set the value of the input to the value of the state that represents the value of that input)
            onChange={handleChange}
            className="border border-gray-800 p-5 rounded-xl mr-5"
            type="text"
            placeholder="enter first name"
          />
          <input
            name="lastName" // name property
            value={formData.lastName} // controlled input
            onChange={handleChange}
            className="border border-gray-800 p-5 rounded-xl mr-5"
            type="text"
            placeholder="enter last name"
          />
          <input
            name="email" // name property
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-800 p-5 rounded-xl"
            type="text"
            placeholder="enter your email"
          />
          <button
            onClick={clearFields}
            className="ml-4 mt-2 bg-amber-400 p-4 rounded-xl shadow-inner"
          >
            clear fields
          </button>

          <textarea
            name="comments"
            className=" ml-4 border border-gray-800 p-5 rounded-xl"
            value={formData.comments}
            onChange={handleChange}
            placeholder="enter comments"
          />

          <div className="flex items-center mt-4">
            <input
              name="isFriendly"
              className="ml-4"
              type="checkbox"
              id="isFriendly"
              checked={formData.isFriendly}
              onChange={handleChange}
            />
            <label className="ml-3" htmlFor="isFriendly">
              are you friendly?
            </label>
          </div>

          <div className="mt-5">
            <fieldset className="border border-gray-800 p-4 rounded-lg">
              <legend>Current employment status</legend>
              <div className="mt-2">
                <input
                  type="radio"
                  id="unemployed"
                  name="employment"
                  value="unemployed"
                  onChange={handleChange}
                  checked={formData.employment === "unemployed"} // Set checked based on formData
                />
                <label className="ml-3" htmlFor="unemployed">
                  Unemployed
                </label>
                <br />
              </div>

              <div className="mt-2">
                <input
                  type="radio"
                  id="part-time"
                  name="employment"
                  value="part-time"
                  onChange={handleChange}
                  checked={formData.employment === "part-time"} // Set checked based on formData
                />
                <label className="ml-3" htmlFor="part-time">
                  Part time
                </label>
                <br />
              </div>

              <div className="mt-2">
                <input
                  type="radio"
                  id="full-time"
                  name="employment"
                  value="full-time"
                  onChange={handleChange}
                  checked={formData.employment === "full-time"} // Set checked based on formData
                />
                <label className="ml-3" htmlFor="full-time">
                  full time
                </label>
                <br />
              </div>
            </fieldset>
          </div>
          <div className="dropDown">
            <label className="mr-4" htmlFor="favColor">
              what's your favorite color?
            </label>
            <select
              className="mt-4 border border-gray-800 p-2 rounded-xl"
              id="favColor"
              value={formData.favColor}
              onChange={handleChange}
              name="favColor"
            >
              <option value=""> -- Choose --</option>
              <option value="red">red</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="indigo">indigo</option>
              <option value="violet">violet</option>
            </select>
            {/* <input type="submit" /> */}
            <button
              onClick={onClickSubmit}
              className="ml-4 mt-2 bg-amber-400 p-4 rounded-xl shadow-inner"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
