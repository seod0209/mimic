
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals:1+2= ${1+2}`);
console.log('dongee\'s room');



console.log(1 + 1);
console.log(1 - 1); 
console.log(1 / 1); 
console.log(1 * 1); 
console.log(5 % 2);
console.log(2 ** 3); 

let counter= 2;
const preIncrement= ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement= counter++;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);

const preDecrement= --counter;
console.log(`preDecrement: ${preDecrement}, counter:${counter}`);
const postDecrement= counter--;
console.log(`postDecrement: ${postDecrement}, counter:${counter}`);

let x =3;
let y=6;
x +=y; //x=x+y
x -=y;
x *=y;
x /=y;

console.log(10<6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6);
console.log(10 >=6);

const value1= false;
const value2= 4 < 2;

console.log(`or: ${value1|| value2|| check()}`);

console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('what?');
    }
    return true;
}

console.log(!value1);


const stringFive= '5';
const numberFive = 5;

console.log(stringFive == numberFive)
console.log(stringFive != numberFive);

console.log(stringFive ===numberFive);
console.log(stringFive !== numberFive);

const dong1= { name: 'dong'};
const dong2= { name: 'dong'};
const dong3= dong1;
console.log(dong1 == dong2);
console.log(dong1=== dong2);
console.log(dong1===dong3);

console.log(0==false); 
console.log(0===false); 
console.log(''==false); 
console.log(''===false);
console.log(null==undefined);
console.log(null===undefined);

const name = 'dong2';
if (name === 'dong') {
    console.log('Welcome, dong!');
} else if (name ==='coder'){
    console.log('U R amazing coder');
} else {
    console.log('unkwnon');
}

console.log(name === 'dong' ? 'yes' : 'no');

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love U!');
        break;
    default:
        console.log("same all~");
        break;
}

let i = 3;
while (i>0) {
    console.log(`while:${i}`);
    i--;
}

do {
    console.log(`do while:${i}`);
    i--;
} while(i>0);

for (i=3; i >0; i--) {
    console.log(`forL ${i}`);
}

for(let i =3; i>0; i=i -2){
    console.log(`inline variable for: ${i}`);
}

for (let i=0; i<10; i++) {
    for (let j =0; j <10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

for (let i=0; i< 11 ; i++){
    if (i% 2 !==0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

for(let i=0; i<11; i++) {
    if(i>8) {
        break;
    }
    console.log(`q2. ${i}`);
}








