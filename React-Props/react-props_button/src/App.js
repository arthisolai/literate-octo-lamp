import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    alert("You clicked me!");
    console.log("I'm clicked");
  };
  return (
    <Button
      color="white"
      disabled={false}
      text="Submit"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      color={color}
      onClick={onClick}
      style={{ height: "100px", backgroundColor: "red" }}
    >
      {text}
    </button>
  );
}
