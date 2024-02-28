import readlineSync from 'readline-sync';
import time from "../bin/brain-games.js";
let name;
function text(){
    console.log('brain-games');
    console.log('Welcome to the Brain Games!');
    name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
}
text();
export {name}
export default text;