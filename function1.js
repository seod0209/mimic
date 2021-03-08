'use strict';

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}

log('hello@');
log(1234);


function changeName(obj){
    obj.name='coder';
}
const ellie ={name: 'ellie'};
changeName(ellie);
console.log(ellie);

function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('hi');

function printAll(...args) {
    for(let i=0; i< args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'dong2');

let globalMessage='gloabl';
function printMessage(){
    let message='hello';
    console.log(message); 
    console.log(globalMessage);
}

printMessage();

function sum(a,b){
    return a+b;
}
const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);



const print=function(){
    console.log('print');
};
print();
const printAgain= print;
printAgain();
const sumAgain= sum;
console.log(sumAgain(1,3));

function randomQuiz(answer, printYes, printNo){
    if(answer ==='love U'){
        printYes();
    } else{
        printNo();
    }
}

const printYes= function(){
    console.log('Yes');
};
const printNo= function print(){
    console.log('no');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love U', printYes, printNo);

const simplePrint= () => console.log('simplePrint');

(function hello(){
    console.log('IIFE');
})
();
//정해진 데이터를 처리하는 경우 if문 보다는 switch가 유용
