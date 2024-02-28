#!/usr/bin/env node
import readlineSync from 'readline-sync';
import time from "./brain-games.js";
import {  name } from "../src/cli.js";
time();
console.log('Find the greatest common divisor of given numbers.');
let random1 = Math.floor(Math.random() * 2500);
let random2 = Math.floor(Math.random() * 2500);
let loss = true;
for (let win = 0; win !== 3; win += 1){
    if (random1 > random2){
        for(let correct = random2; correct > 0; correct--){
            if ((random2/correct) === Math.floor(random2/correct) && (random1/correct) === Math.floor(random1/correct)){
                console.log('Question: ' + random1 + ' ' + random2);
                let text = readlineSync.question('Your answer: ');
                if (parseInt(text) === (correct)){
                    console.log('Correct!');
                    break;
                }
                else{
                    console.log('Question: ' + random1 + ' ' + random2);
                    console.log('your answer: ' + text);
                    console.log('\'' + text + '\' is wrong answer ;(. Correct answer was \'' + correct + '\'.');
                    console.log('Let\'s try again, ' + name + '!');
                    loss = false;
                    break;
                }
            }
        }
    }
    else{
        for(let correct = random1; correct > 0; correct--){
            if ((random2/correct) === Math.floor(random2/correct) && (random1/correct) === Math.floor(random1/correct)){
                console.log('Question: ' + random1 + ' ' + random2);
                let text = readlineSync.question('Your answer: ');
                if (parseInt(text) === (correct)){
                    console.log('Correct!');
                    break;
                }
                if(parseInt(text) !== (correct)){
                    console.log('Question: ' + random1 + ' ' + random2);
                    console.log('your answer: ' + text);
                    console.log('\'' + text + '\' is wrong answer ;(. Correct answer was \'' + correct + '\'.');
                    console.log('Let\'s try again, ' + name + '!');
                    loss = false;
                    break;
                }
            }
        }
    }
    random1 = Math.floor(Math.random() * 2500);
    random2 = Math.floor(Math.random() * 2500);
    if(loss === false){
        break;
    }
    if(win === 2){
        console.log('Congratulations ' + name + '!')
    }
}