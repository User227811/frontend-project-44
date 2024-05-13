#!/usr/bin/env node
import readlineSync from "readline-sync";
import time from "./brain-games.js";
import { name } from "../src/cli.js";
time();
console.log("What is the result of the expression?");
let random = Math.random() * 9;
let random1 = Math.floor(Math.random() * 250);
let random2 = Math.floor(Math.random() * 250);
let correct = 0;
let win = 0;
for (let i = 0; i !== 3; i += 1) {
  if (random < 3) {
    correct = random1 * random2;
    console.log("Question: " + random1 + " * " + random2);
    let number = readlineSync.question();
    if (parseInt(number) === correct) {
      console.log("Correct!");
      win += 1;
      random = Math.random() * 9;
      random1 = Math.floor(Math.random() * 250);
      random2 = Math.floor(Math.random() * 250);
      if (win === 3) {
        console.log("Congratulations, " + name + "!");
        break;
      }
    } else {
      console.log("Your answer: " + number);
      console.log(
        "'" +
          number +
          "' is wrong answer ;(. Correct answer was '" +
          correct +
          "'."
      );
      console.log("Let's try again, " + name + "!");
      break;
    }
  }
  if (random < 6 && random >= 3) {
    correct = random1 + random2;
    console.log("Question: " + random1 + " + " + random2);
    let number = readlineSync.question();
    if (parseInt(number) === correct) {
      console.log("Correct!");
      win += 1;
      random = Math.random() * 9;
      random1 = Math.floor(Math.random() * 250);
      random2 = Math.floor(Math.random() * 250);
      if (win === 3) {
        console.log("Congratulations, " + name + "!");
        break;
      }
    } else {
      console.log("Your answer: " + number);
      console.log(
        "'" +
          number +
          "' is wrong answer ;(. Correct answer was '" +
          correct +
          "'."
      );
      console.log("Let's try again, " + name + "!");
      break;
    }
  }
  if (random < 9 && random >= 6) {
    correct = random1 - random2;
    console.log("Question: " + random1 + " - " + random2);
    let number = readlineSync.question();

    if (parseInt(number) === correct) {
      console.log("Correct!");
      win += 1;
      random = Math.random() * 9;
      random1 = Math.floor(Math.random() * 250);
      random2 = Math.floor(Math.random() * 250);
      if (win === 3) {
        console.log("Congratulations, " + name + "!");
        break;
      }
    } else {
      console.log("Your answer: " + number);
      console.log(
        "'" +
          number +
          "' is wrong answer ;(. Correct answer was '" +
          correct +
          "'."
      );
      console.log("Let's try again, " + name + "!");
      break;
    }
  }
  if (win === 3) {
    console.log("Congratulations, " + name + "!");
    break;
  }
}
