//Function
//-fundmental building block in the program

//- called subprogram, can be used multiple times
//-performs a task or calculates a value


//1.Function declaration
//function name(param1,param2) {body; ... return;}
//one function === one thing( 하나의 함수는 한가지의 일만 하도록)
//naming: doSomething, command, verb (함수의 이름 작성시 noun(명사)가 아닌)
//e.g. createCardAndPoint -> createCard, createPoint 두개로 세분화 하는 게 깔끔
//function is object in JS (JS에서 function은 Object임)


function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//2. Parameters
// premitive parameters: passed by value
//object parameters: passed by reference

function changeName(obj){
    obj.name='coder';
}

//changeName은 전달된 obj의 name을 무조건 coder로 변경하는 함수
//변경사항이 그대로 메모리에 적용됨 
const ellie ={name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('hi');
//사용자가 from이라는 parameter를 전달하지 않을 경우
// 'unknown'으로 대체되어 사용됨
// 이전에는 if(from===undefined){from='unknown';} 을 작성해야했음


//4. Rest parameters(added in ES6):...(args(배열) 형태로 전달됨)
function printAll(...args) {
    for(let i=0; i< args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) =>console.log(arg));
}

printAll('dream', 'coding', 'dongee');


//5.Local scope
let globalMessage='gloabl'; //global variable 
function printMessage(){   //부모함수
    let message='hello';
    console.log(message); //local variable
    console.log(globalMessage); //{} 안에서는 밖의 glob을 가져올수 있음
  function printAnother(){ //자식함수
      console.log(message);
      let childMessage='hello';
  }

}

printMessage();

//6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user){
    if (user.point >10) {
        //long upgrade logic
    }
}

//good
function upgradeUser(user){
    if(user.point <=10){
        return; //조건이 맞지 않을 때는 리턴해서 함수 종료하고
        //조건이 맞을때만 필요한 로직들을 실행
    }
    //long upgrade logic
}




//First-class Function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function.

//1.Function expression
//a function declaration can be called earlier than it is defined.
//(hoisted) 함수선언이전에 호출가능

//a function expression is created when the execution reaches it.

const print=function(){
    console.log('print'); //anonymous function  이름없는 함수;필요부분만 작성해서 변수에 할당
    // cf. named function(이름있는 함수)
};
print();
const printAgain= print;
printAgain();
const sumAgain= sum;
console.log(sumAgain(1,3));

//2.Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer ==='love U'){
        printYes();
    } else{
        printNO();
    }

}
//정답+정답이맞을때 호출할 함수&틀릴때 호출할 함수 전달해줌
//함수 전달후 상황에 맞는 함수를부르는함수= callback function


const printYes= function(){ //ananymous function
    console.log('Yes');
}
const printNo= function print(){
    console.log('no');\

print(); //함수안에서 또다른 함수 호출= requirsion; 피보나치수 계산, 반복된 평균값 계산시에만 사용
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love U', printYes, printNo);


//Arrow function
//always anonymous. 간결함. {}필요없음.
const simplePrint= () => console.log('simplePrint');

//같이 한줄에 묶어서 '=>'

const add=(a,b) => a+b;


//IIFE: Immediately Invoked Function Expression; ()로 묶기
(function hello(){
    console.log('IIFE');
})
();

//Quiz
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder

function divide(a,b){
    return a/b;
}
const result= divide(8,4);
console.log(`divide: ${8,4}`);


//answer
function Calcualte(conmmand, a, b){
    switch(command){
        case 'add':
            return a+b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add',2,3));

//function declaration (선언)
function doSomething(전달받는인자) {
    동작하는 코드부문/ 기능수행
    console.log('hello');
}


//function call(호출)
//함수이름을 적고 괄호를 이용해 호출
doSomething();

//
function add(a, b) {
    const sum = a+b;
    return sum;
}
const result = add(1, 2);
console.log(result);

//
function doSomething(add){
    console.log(add);
    const result = add(1,3);
    console.log(result);
}
function add(a, b) {
    const sum = a+b;
    return sum;
}

doSomething(add);