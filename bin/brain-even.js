import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + name + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let random = Math.floor(Math.random() * 25);
let win = 0;
for (let q = 0; q < 3; q++){
    console.log('Question: ' + random);
    const choice = readlineSync.question('Your answer: ');
    if (random % 2 === 0 && choice === 'yes'){
        console.log('Correct!');
        win += 1;
    }
    if (random % 2 !== 0 && choice === 'no'){
        console.log('Correct!');
        win += 1;
    }
    if (random % 2 === 0 && choice === 'no'){
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.');
        console.log('Let\'s try again, ' + name + '! 1');
        break;
    }
    if (random % 2 !== 0 && choice === 'yes'){
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
        console.log('Let\'s try again, ' + name + '! 2');
        break;
    }
    random = Math.floor(Math.random() * 25);
}
if (win === 3){
    console.log('Congratulations, ' + name + '!');
}