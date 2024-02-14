import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log('Hello,' + name + '!');
console.log('Find the greatest common divisor of given numbers.');
let q1 = Math.floor(Math.random() * 2500);
let q2 = Math.floor(Math.random() * 2500);
let a = true;
for (let a = 0; a !== 3; a += 1){
    if (q1 > q2){
        for(let q = q2; q > 0; q--){
            if ((q2/q) === Math.floor(q2/q) && (q1/q) === Math.floor(q1/q)){
                console.log('Question: ' + q1 + ' ' + q2);
                let text = readlineSync.question('Your answer: ');
                if (parseInt(text) === (q)){
                    console.log('Correct!');
                    break;
                }
                else{
                    console.log('Question: ' + q1 + ' ' + q2);
                    console.log('your answer: ' + text);
                    console.log('\'' + text + '\' is wrong answer ;(. Correct answer was \'' + q + '\'.');
                    console.log('Let\'s try again, ' + name + '!');
                    a = false;
                    break;
                }
            }
        }
    }
    else{
        for(let q = q1; q > 0; q--){
            if ((q2/q) === Math.floor(q2/q) && (q1/q) === Math.floor(q1/q)){
                console.log('Question: ' + q1 + ' ' + q2);
                let text = readlineSync.question('Your answer: ');
                if (parseInt(text) === (q)){
                    console.log('Correct!');
                    break;
                }
                if(parseInt(text) !== (q)){
                    console.log('Question: ' + q1 + ' ' + q2);
                    console.log('your answer: ' + text);
                    console.log('\'' + text + '\' is wrong answer ;(. Correct answer was \'' + q + '\'.');
                    console.log('Let\'s try again, ' + name + '!');
                    a = false;
                    break;
                }
            }
        }
    }
    q1 = Math.floor(Math.random() * 2500);
    q2 = Math.floor(Math.random() * 2500);
    if(a === false){
        break;
    }
    if(a === 2){
        console.log('Congratulations ' + name + '!')
    }
}