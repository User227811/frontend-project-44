import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + name + '!');
console.log('What is the result of the expression?');
let a = Math.random() * 9;
let a1 = Math.floor(Math.random() * 250);
let a2 = Math.floor(Math.random() * 250);
let q = 0;
let q1 = 0;
for (let i = 0; i !== 3; i++){
    if (a < 3){
        q = a1 * a2;
        console.log(a1 + " * " + a2);
        let number = readlineSync.question();
        if (parseInt(number) === q){
            console.log('Correct!');
            q1 += 1;
            a = Math.random() * 9;
            a1 = Math.floor(Math.random() * 250);
            a2 = Math.floor(Math.random() * 250);
        }
        else{
            console.log('Question: ' + a1 + ' ' + '* ' + a2);
            console.log('Your answer: ' + number);
            console.log('\'' + number + '\' is wrong answer ;(. Correct answer was \'' + q + '\'.' );
            console.log('Let\'s try again, ' + name + '!');
            break;
        }
    }
    if (a < 6 && a >= 3){
        q = a1 + a2;
        console.log(a1 + " + " + a2);
        let number = readlineSync.question();
        if (parseInt(number) === q){
            console.log('Correct!');
            q1 += 1;
            a = Math.random() * 9;
            a1 = Math.floor(Math.random() * 250);
            a2 = Math.floor(Math.random() * 250);
        }
        else{
            console.log('Question: ' + a1 + ' ' + '* ' + a2);
            console.log('Your answer: ' + number);
            console.log('\'' + number + '\' is wrong answer ;(. Correct answer was \'' + q + '\'.' );
            console.log('Let\'s try again, ' + name + '!');
            break;
        }
    }
    if (a < 9 && a >= 6){
        q = a1 - a2;
        console.log(a1 + " - " + a2);
        let number = readlineSync.question();

        if (parseInt(number) === q){
            console.log('Correct!');
            q1 += 1;
            a = Math.random() * 9;
            a1 = Math.floor(Math.random() * 250);
            a2 = Math.floor(Math.random() * 250);
        }
        else{
            console.log('Question: ' + a1 + ' ' + '* ' + a2);
            console.log('Your answer: ' + number);
            console.log('\'' + number + '\' is wrong answer ;(. Correct answer was \'' + q + '\'.' );
            console.log('Let\'s try again, ' + name + '!');
            break;
        }
    }
    if (q1 === 3){
        console.log('Congratulations, ' + name + '!');
    }
}