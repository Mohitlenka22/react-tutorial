import React, { useState, useMemo } from "react";

//The important use case of useMemo.
/* 
 -> when we have a slowfunction that updates the state, then as state updates your component re-rendered from top to bottom again && again.
 -> In this case, if someone updating the state not part of the slowfunction function, then also your slowfunction is runned as a part of re-rendering. whicg basically slowdowns the page.
 -> To prevent the re-running of slowfunction when it doesn't needed, we can use useMemo => that basically memoizes the the things that are not part of re-rendering.
*/
const slowfunction = (number) => {
  for (let i = 0; i <= 10 ** 9; i++) {}
  return number * 2;
};
const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  console.time("a");
  const doubleNumber = useMemo(() => {
    return slowfunction(number);
  }, [number]);
  console.timeEnd("a");
  const themeStyles = {
    color: theme ? "#fff" : "#000",
    backgroundColor: theme ? "#000" : "#fff",
    padding: "20px",
  };

  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(Number.parseInt(e.target.value));
        }}
      />
      <h1>{doubleNumber}</h1>
      <span style={themeStyles}>Theme</span>
      <button type="submit" onClick={changeTheme}>
        change Theme
      </button>
    </>
  );
};

export default UseMemo;
