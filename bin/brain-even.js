import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + name + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let a = Math.floor(Math.random() * 25);
let a1 = 0;
for (let q = 0; q < 3; q++){
    console.log('Question: ' + a);
    const id = readlineSync.question('Your answer: ');
    if (a % 2 === 0 && id === 'yes'){
        console.log('Correct!');
        a1 += 1;
    }
    if (a % 2 !== 0 && id === 'no'){
        console.log('Correct!');
        a1 += 1;
    }
    if (a % 2 === 0 && id === 'no'){
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
        console.log('Let\'s try again, ' + name + '! 1');
        break;
    }
    if (a % 2 !== 0 && id === 'yes'){
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
        console.log('Let\'s try again, ' + name + '! 2');
        break;
    }
    a = Math.floor(Math.random() * 25);
}
if (a1 === 3){
    console.log('Congratulations, ' + name + '!');
}