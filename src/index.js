import React from "react";
import ReactDOM from "react-dom";

const fName = "Tara";
const lName = "Larsen";

ReactDOM.render(
  <div>
  <h1>Hello, {`${fName} ${lName}`}!</h1>
  <p>You're luck number is {Math.floor(Math.random() * 10)}.</p>
  </div>,
 document.getElementById("root")
 );//end render method
