import readlineSync from 'readline-sync';
import time from "./brain-games.js";
function text(){
    console.log('brain-games');
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
}
time();
text();