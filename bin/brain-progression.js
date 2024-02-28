#!/usr/bin/env node
import readlineSync from 'readline-sync';
import time from "./brain-games.js";
import { name } from "../src/cli.js";
time();
console.log('What number is missing in the progression?');
let random = Math.floor(Math.random() * 100000);
let random1 = Math.floor(Math.random() * 10);
let array = [];
let win = 0;
let id = 0;
let correct = 0;
for (let i = 0; i < 3; i++){
    for(let correct = 5; correct <= 20; correct = correct + 1){
        id = correct - 5;
        array[id] = parseInt(random) * correct;
    }
    correct = array[random1];
    array[random1] = '..';
    console.log('Question: ' + array.join(' '));
    let number = readlineSync.question('Your answer: ');
    if (parseInt(number) === correct){
        console.log('Correct!');
        win = win + 1;
    }
    if (parseInt(number) !== correct){
        console.log('\'' + number + '\' is wrong answer ;(. Correct answer was \' ' +  correct + '!');
        console.log('Let\'s try again, ' + name + '!');
        break;
    }
    if (win === 3){
        console.log('Congratulations, ' + name + '!');
        break;
    }
    random = Math.floor(Math.random() * 100000);
    random1 = Math.floor(Math.random() * 10);
}