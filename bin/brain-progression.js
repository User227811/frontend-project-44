import readlineSync from 'readline-sync';
console.log('brain-progression');
let name = readlineSync.question('May, I have your name? ');
console.log('Hello, ' + name);
console.log('What number is missing in the progression?');
let q = Math.floor(Math.random() * 100000);
let q1 = Math.floor(Math.random() * 10);
let q2 = [];
let a = 0;
let a1 = 0;
let z = 0;
for (let a2 = 0; a2 < 3; a2++){
    for(let z = 5; z <= 20; z = z + 1){
        a1 = z - 5;
        q2[a1] = parseInt(q) * z;
    }
    z = q2[q1];
    q2[q1] = '..';
    console.log(q2.join(' '));
    let number = readlineSync.question('Your answer: ');
    if (parseInt(number) === z){
        console.log('Correct!');
        a = a + 1;
    }
    if (parseInt(number) !== z){
        console.log('\'' + number + '\' is wrong answer ;(. Correct answer was \' ' +  z + '!');
        console.log('Let\'s try again, ' + name + '!');
        break;
    }
    if (a === 3){
        console.log('Congratulations, ' + name + '!');
        break;
    }
    q = Math.floor(Math.random() * 100000);
    q1 = Math.floor(Math.random() * 10);
}