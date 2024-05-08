#!/usr/bin/env node
import readlineSync from "readline-sync";
import time from "./brain-games.js";
import { name } from "../src/cli.js";
time();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let random = Math.floor(((Math.random() * 1000)));
let rounded = Math.sqrt(random);
let random1 = Math.floor(((Math.random() * 1000)));
let win = 0;
let examination = 0;
/* function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
} 

function printPrimes(max) {
  for (let i = 2; i <= max; i++) {
    if (isPrime(i));
  }
}
for(let z2 = 0; z2 <= 3; z2++){
    while( isPrime(rounded) !== true){
        random = 173; //Math.floor(Math.random() * 1000);
        random1 = 173; //Math.floor(((Math.random() * 1000)));
        win = win + 1;
    }
    if(win === 3){
      console.log('Congratulations, ' + name + '!');
      break;
  }
    console.log('Question: ' + random1);
    let number = readlineSync.question("Your answer: ");
    if (number === 'yes'){
      examination = true;
    }
    if (number === 'no'){
      examination = false;
    }
    if (random1 === 1 && number === 'no' || random1 === 0 && number === 'no'){
      console.log('Correct!');
      win = win + 1;
      random1 = Math.floor(((Math.random() * 1000)));
      continue;
    }
    if (examination === isPrime(random1)){
        console.log('Correct!');
        win = win + 1;
        random1 = Math.floor(((Math.random() * 1000)));
        continue;
    }
    if (examination !== isPrime(random1)){
        console.log('Question: ' + random1);
        console.log('your answer: ' + number);
        console.log('\'' + number+ '\' is wrong answer ;(. Correct answer was \'yes\'.');
        console.log('Let\'s try again, ' + name + '!');
        break;
    }
    if (examination !== isPrime(random1)){
      console.log('Correct!');
      win = win + 1;
      random1 = Math.floor(((Math.random() * 1000)));
      continue;
    }
    if (examination === isPrime(random1)){
      console.log('Question: ' + random1);
      console.log('your answer: ' + number);
      console.log('\'' + number+ '\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log('Let\'s try again, ' + name + '!');
      break;
    }
}*/
let numbers = 0;
for(let z2 = 0; z2 <= 3; z2++){
  random = Math.floor(Math.random() * 1000);
  random1 = Math.floor(((Math.random() * 1000)));
  win = win + 1;
  if(win === 4){
    console.log('Congratulations, ' + name + '!');
    break;
  }
  for(let z = 2; z < random1; z++){
    if(random1 % z === 0){
      numbers = 1;
    }
  }
  if(numbers === 1){
    console.log("Не простое число");
    console.log('Question: ' + random1);
    let number2 = readlineSync.question("Your answer: ");
    if (number2 === 'yes'){
      console.log('Question: ' + random1);
      console.log('your answer: ' + number2);
      console.log('\'' + number2+ '\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log('Let\'s try again, ' + name + '!');
      break;
    }
    if (number2 === 'no'){
      examination = false;
    }
  }else{
    console.log('Число простое');
    console.log('Question: ' + random1);
    let number1 = readlineSync.question("Your answer: ");
    if (number1 === 'yes'){
      examination = false;
    }
    if (number1 === 'no'){
      console.log('Question: ' + random1);
      console.log('your answer: ' + number1);
      console.log('\'' + number1+ '\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log('Let\'s try again, ' + name + '!');
      break;
    }
  }
}