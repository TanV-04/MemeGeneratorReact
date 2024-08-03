import React from "react";
import profile from "../images/profile.png";
import starEmpty from "../images/starEmpty.png";
import starFilled from "../images/starFilled.png";

export default function Card() {
  // this is an object
  const [contact, setContact] = React.useState({
    firstName: "john",
    lastName: "doe",
    phone: "+1 9876543243",
    email: "jonnie@gmail.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFav(props) {
    console.log(props);
    // alert("toggled!");

    // prevState provides you access to the "old contact"
    setContact((prevState) => {

      // return a new object
      return {
        // the below code can be reduced using the spread operator (just uncomment the below 2 lines code)
        // ...preState
        // isFavorite: !prevState.isFavorite,
        firstName: "john",
        lastName: "doe",
        phone: "+1 9876543243",
        email: "jonnie@gmail.com",
        isFavorite: false,
        isFavorite: !prevState.isFavorite, // takes the last declaration and uses that as the actual value of our new object
      };
    });
  }

  return (
    <div className="mt-5 max-w-xs mx-auto bg-beige-white shadow-lg rounded-lg overflow-hidden shadow-slate-400 shadow-right">
      <div className="imgContainer p-4">
        <img
          src={profile}
          className="w-full h-auto mx-auto rounded-lg"
          alt="profile"
        />
      </div>
      <div className="flex items-center justify-start ml-4 mt-4">
        <img
          onClick={toggleFav}
          src={starIcon}
          className="w-6 h-6"
          alt="starEmpty"
        />
      </div>
      <div className="infoContainer p-4 text-left">
        <h1 className="font-bold text-xl mt-2">
          {contact.firstName} {contact.lastName}
        </h1>
        <h3 className="text-xs mt-2">{contact.phone}</h3>
        <h4 className="text-xs mt-1">{contact.email}</h4>
      </div>
    </div>
  );
}
