"use client";
import { Fragment, useState } from "react";
import { ReactDOM } from "react";
import React from "react";
//here started
const page = () => {
  
  return (
    <>
      <p>Text input 1:</p> <input name="number1" id="value1" />
      <hr />
      <p>Text input 2:</p> <input name="number1" id="value2" />
      <hr />
      <p id="demo">Here</p>
      
      <button
      
        onClick={() => {
          let number1 = document.getElementById("value1").value; 
          let number2 = document.getElementById("value2").value;
          document.getElementById("demo").innerHTML = (
         `<Fragment>
          <h2>Given numbers are: ${number1} & ${number2}</h2>
          Sum : ${ parseInt(number1)+ parseInt(number2)} <hr />
          Minus : ${number1-number2}<hr />
          Mul : ${number1*number2}<hr />
          Div : ${number1/number2}
          <hr />
          </Fragment>`
          
          )
        }}        
      >
        ClickME
      </button>
      
      </>
  );
};

export default page;
