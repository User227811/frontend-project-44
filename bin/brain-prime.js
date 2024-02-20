import readlineSync from "readline-sync";
console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log("Hello," + name + "!");
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let random = Math.floor(((Math.random() * 1000)));
let rounded = Math.sqrt(random);
//let random1 = Math.floor(((Math.random() * 5)));
let random1 = 4;
let array = [];
let win = 0;
let examination = 0;
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
    while( isPrime(rounded) !== true){
        random = Math.floor(Math.random() * 1000);
        random1 = Math.floor(((Math.random() * 1000)));
    }
    console.log('Question: ' + random1);
    console.log(isPrime(random1));
    let number = readlineSync.question("Your answer: ");
    if (number === 'yes'){
      examination = true;
    }
    if (number === 'no'){
      examination = false;
    }
    if (number === 'yes' && examination === isPrime(random1)){
        console.log(random1);
        console.log('Correct!');
        win = win + 1;
        random1 = Math.floor(((Math.random() * 1000)));
        continue;
    }
    if (number === 'yes' && examination !== isPrime(random1)){
        console.log(random1);
        console.log('Question: ' + random1);
        console.log('your answer: ' + number);
        console.log('\'' + number+ '\' is wrong answer ;(. Correct answer was \'no\'.');
        console.log('Let\'s try again, ' + name + '!');
        break;
    }
    if (number === 'no' && examination !== isPrime(random1)){
      console.log(random1);
      console.log('Correct!');
      win = win + 1;
      random1 = Math.floor(((Math.random() * 1000)));
      continue;
    }
    if (number === 'no' && examination === isPrime(random1)){
      console.log(random1);
      console.log('Question: ' + random1);
      console.log('your answer: ' + number);
      console.log('\'' + number+ '\' is wrong answer ;(. Correct answer was \'yes\'.');
      console.log('Let\'s try again, ' + name + '!');
      break;
  }
    if(win === 3){
        console.log('Congratulations ' + name + '!');
    }
    random1 = Math.floor(((Math.random() * 1000)));
}