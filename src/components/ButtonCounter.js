import React from 'react';

export default function ButtonCounter() {

  let numberOfClicks = 0;

  function handleClick(event) {
    // this won't work as expected, we must use useState
    numberOfClicks++;
    // look into the console and you will see the counter does get incremented
    console.log("Number of clicks: " + numberOfClicks);
    // BUT without using useState/setState, the HTML will never be re-rendered
    // so it will remain at 0 in the page
  }

  return (
    <div className="ButtonCounter">
      <button onClick={handleClick}>Click me</button>

      <p>Number of clicks: {numberOfClicks}</p>

      <p>This code was render at: {new Date().toString()}</p>
    </div>
  );
}