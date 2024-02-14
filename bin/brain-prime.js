import readlineSync from "readline-sync";
console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log("Hello," + name + "!");
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let q = Math.floor(((Math.random() * 1000)));
let z = Math.sqrt(q);
let z1 = Math.floor(((Math.random() * 1000)));
let q2 = [];
let a = 0;
function isPrime(num) {
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
for(let z2 = 0; z2 < 3; z2++){
    while( isPrime(q) !== true){
        q = Math.floor(Math.random() * 10);
    }
    console.log('Question: ' + z1);
    let number = readlineSync.question("Your answer: ");
    if (number === 'yes' && z1 === isPrime(z1)){
        console.log('Correct!');
        a = a + 1;
    }
    if (number === 'yes' && z1 !== isPrime(z1)){
        console.log('Question: ' + z1);
        console.log('your answer: ' + number);
        console.log('\'' + number+ '\' is wrong answer ;(. Correct answer was \'yes\'.');
        console.log('Let\'s try again, ' + name + '!');
        break;
    }
    if (number === 'no' && z1 === isPrime(z1)){
        console.log('Question: ' + z1);
        console.log('your answer: ' + number);
        console.log('\'' + number+ '\' is wrong answer ;(. Correct answer was \'yes\'.');
        console.log('Let\'s try again, ' + name + '!');
        break;
    }
    if (number === 'no' && z1 !== isPrime(z1)){
        console.log('Correct!');
        a = a + 1;
    }
    if(a === 3){
        console.log('Congratulations ' + name + '!');
    }
    z1 = Math.floor(((Math.random() * 1000)));
}