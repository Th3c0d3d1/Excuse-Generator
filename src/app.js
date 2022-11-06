/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  // windows.onload tells the function to run on the page loadup
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = `${who[excuseGen(who)]} ${action[excuseGen(action)]} 
  ${what[excuseGen(what)]} ${when[excuseGen(when)]}`;

  // who[excuseGen(who)] +
  // " " +
  // action[excuseGen(action)] +
  // " " +git
  // what[excuseGen(what)] +
  // " " +
  // when[excuseGen(when)];

  function excuseGen(myArray) {
    let myRandom = Math.floor(Math.random() * myArray.length);
    // randomizes the array
    return myRandom;
  }
};
