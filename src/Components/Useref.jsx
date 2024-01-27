import React, { useRef, useState, useEffect } from "react";

const Useref = () => {
  //useRef is used to refer the DOM elements
  //basic useCase of useRef is to change value of variable without rendering the component & to persist the state between the re-renders.
  //also used to manipulate the DOM elements in components by passing ref object th the ref attribute of the DOM element
  //useRef returns an object with an current property.
  //The main disadvantage with useRef on-Compare with useState is we can't actually update the state with useRef it basically store the value but doesn't re-render the Component.

  const inputRef = useRef();
  console.log(inputRef.current);
  const [name, setName] = useState("");
  const [prev, setPrev] = useState("");

  //After clearing name to get focus back to input we write
  const handleSubmit = () => {
    setPrev(inputRef.current.value);
    setName("");
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        clear
      </button>
      <h2>
        My name is {name} and is used to be {prev}
      </h2>
    </>
  );
};

export default Useref;
