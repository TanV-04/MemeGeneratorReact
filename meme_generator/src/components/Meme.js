import "../App.css";
import memesData from "../memesData";
import React from "react";
import Card from "./Card";
import DownloadButton from "./DownloadButton";

function Meme() {
  let url;

  // use of states in React
  const [memeImage, setMemeImage] = React.useState(""); // state for storing the meme img
  const [meme, setMeme] = React.useState({
    // storing the meme data object
    topText: "", // initial top text of the meme
    bottomText: "", // initial bottom text of the meme
    randomImg: url, // url of the random meme image
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData); // state for storing all meme images

  function handleChange(event) {
    event.preventDefault();

    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // function to fetch a random meme image
  function getMemeImage() {
    const memesArray = memesData.data.memes; // Assuming memesData has a structure with 'data' property containing 'memes' array
    const randomNumber = Math.floor(Math.random() * memesArray.length); // generate a random number using Math.random and round this number using Math.floor, ensuring that randomNumber is an integer within the range [0, memesArray.length-1].
    // console.log(randomNumber); // and console.log this number
    const url = memesArray[randomNumber].download_url; // Get the download URL of the randomly selected meme image
    // setMemeImage(url);

    setMeme((prevUrl) => {
      // Update meme state with the new random image URL
      return {
        ...prevUrl,
        // or
        // topText: "", // initial top text of the meme
        // bottomText: "", // initial bottom text of the meme
        // randomImg: url, // url of the random meme image
        randomImg: url,
      };
    });
    // console.log(url);
  }

  // function handleOnMouseOver() {
  //   console.log("Mouse Over");
  // }

  // const thingsArray = ["thing 1", "thing 2"];
  // const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  // const [things, setThings] = React.useState(["thing 1", "thing 2"]);

  // function addItem() {
  //   // const newThingText = `thing ${thingsArray.length + 1}`; // this line creates a new string using template literals
  //   // setThings((prevState) => [...prevState, newThingText]);
  //   // thingsArray.push(newThingText); // push the newThingText to the end of thingsArray
  //   // console.log(thingsArray);
  // }

  return (
    <main className="relative">
      <p>{url}</p>
      <div className="inputContainer mt-40 flex-col items-center text-xl">
        <input
          type="text"
          placeholder="Top Text"
          className=" px-3 py-3 outline-none border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500 mr-5"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          name="bottomText"
          value={meme.bottomText}
          type="text"
          placeholder="Bottom Text"
          onChange={handleChange}
          className="px-3 py-3 outline-none border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        />
      </div>
      <div className="buttonContainer">
        <button
          onClick={getMemeImage}
          className=" memeButton py-5 px-16 rounded-lg text-xl mt-9 bg-purple-500 hover:bg-purple-600 text-white font-bold focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg "
        >
          <i className="fa-solid fa-image mr-4"></i>
          Get a new meme image
        </button>
      </div>
      {/* <img src={randomImg} onMouseOver={handleOnMouseOver} /> */}

      <div className="relative mt-5">
        <img
          src={meme.randomImg}
          alt="Meme"
          className="rounded-lg h-auto max-h-96 max-w-full mx-auto border border-gray-400"
          style={{ maxWidth: "100%", height: "auto", maxHeight: "700px" }}
        />
        {meme.randomImg && (
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="text-center text-black  bg-opacity-50 p-2 rounded-md">
              <h2 className="memetext text-lg mt-4">{meme.topText}</h2>
            </div>
            <div className="text-center text-black  bg-opacity-50 p-2 rounded-md">
              <h2 className="memetext text-lg mb-4">{meme.bottomText}</h2>
            </div>
          </div>
        )}
      </div>

      {/* <div>
        <Card />
      </div> */}

      <DownloadButton
        imgSrc={meme.randomImg}
        topText={meme.topText}
        bottomText={meme.bottomText}
      />
    </main>
  );
}

export default Meme;

// the reason we did not add parantheses to the handleClick function call is because adding them would
// immediately invoke the function when the component renders, rather than waiting for the event (like a click)
// to trigger it
