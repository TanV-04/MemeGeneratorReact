import React, {useState} from "react";

export default function PropPractice(props) {

  return (
    <header>
      <p>Current User: {props.user}</p>
    </header>
  )
}