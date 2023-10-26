import { useState } from "react";
import { ReactDOM } from "react";
import React from "react";

const Processing = () => {
  let [num1, setnum1] = useState(100);
  let [num2, setnum2] = useState(200);

  // function getValue1(val) {
  //   setnum1(val.target.value);
  // }
  // function getValue2(val) {
  //   setnum2(val.target.value);
  // }

  function calcu() {
    <>
      <p>value is {num1}</p>
    </>;
  }

  return (
    <>
      Text input 1: <input name="num1" />
      <hr />
      Text input 2: <input name="num2" />
      <hr />
      <h2>Given Results :</h2>
      Given Results are {num1} & {num2}
      <hr />
      <button
        onClick={() => {
          // setnum1(val.target.value)

          calcu();
        }}
      >
        Clickme
      </button>
    </>
  );
};

export default Processing;
