//1. string concatenation
// +이용 ->문자열끼리 합해서 새로운 문자열 
console.log('my'+' cat');
//문자열+숫자=숫자가 문자열로 변환되면서 합해짐
console.log('1'+2);
//`백틱기호`활용해서 string literals 만들기 가능/
//이때 $이용하면 변수값을계산해서 스트링으로 포함해서 문자열을 만듬
'''
console.log(`string literals:1+2= ${1+2}`);
//장점: 중간에 줄바꿈을 이용하거나 싱글코트'''''를 이용해도 그대로문자열로 변환되서 나옴

//''사이에 '쓰면 인식안될수 있음. 이때 \(백슬러시)이용
//새로 줄바꿈을 할떄는 \n
//새로 tap \t
console.log('dongee\'s room');


//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(1 % 1); //remainder
console.log(1 ** 1); //exponentiation

///3. Increment(++) and decrement(--) operators
let counter =2;
const preIncrement= ++counter;
//counter = counter +1 ;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement= counter++;
//postIncrement = counter;
//counter= counter+1;(값이 하나씩 증가)
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const preDecrement= --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postIncrement= counter--;
//--를 앞에 붙이면 바로 업뎃후 할당 뒤에붙이면 할당 후 업뎃
//counter= counter+1;(값이 하나씩 감소)
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

//4. Assignment operators
let x =3;
let y=6;
x +=y; //x=x+y(중복되는 x생략)
x -=y;
x *=y;
x /=y;

//5. Comparison operators
console.log(10<6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6);
console.log(10 >=6);

//6. Logical operators: ||(or), &&(and),  !(not)
const value1= false;
const value2= 4 < 2;

// ||(or), finds the first truthy value(트루찾으면 멈춤)
console.log(`or: ${value|| value2|| check()}`);
//true인 check()를 제일 뒤에 배치. expression이나 함수 등

//&&(and), finds the first falsy value

console.log('and: ${value1 && value2 && check()}');

// often used to compress long if=statement
// nullableObject && nullableObject.something
//: (null이면 False 여서 실행안되고 null아닐때만 something이라는 value 받아옴)

if (nullableObject !=null) {
    nullableObject.something;
}

function check() {
    for(let i = 0; i < 10; i++) {
        //waiting time
        console.log('what?');
    }
    return true;
}

//!(not)값을 반대로 바꿔줌
console.log(!value1);

//7.Equality
const stringFive= '5';
const numberFive = 5;

//==loose equality, with type conversion
console.log(stringFive == numberFive)
console.log(stringFive != numberFive);

//===string equality, no type conversion
console.log(stringFive ===numberFive);
console.log(stringFive !== numberFive);

//object equality by reference(object는 ref로 저장됨)

const dong1= { name: 'dong'};
const dong2= { name: 'dong'};
const dong3= dong1;
console.log(dong1 == dong2);
console.log(dong1=== dong2);
console.log(dong1===dong3);

//equality - puzzler
console.log(0==false); //frue
console.log(0===false); //false
console.log(''==false); //frue
console.log(''===false);//false
console.log(null==undefined);//frue
console.log(null===undefined);//false

//8. Conditional operators: if
//if, if else, else
const name = 'coder';
if (name === 'dong') {
    console.log('Welcome, dong!');
}
//if statement는  statement가 true면 block을 실행
else if (name ==='coder'){
    console.log('U R amazing coder');

// 만약에 name이 dong이 아니라 coder이면 if 그다음인 else if로 넘어감

} else {
    console.log('unkwnon');
}
// name 값이 dong도 아니고 coder도 아니면 else로 넘어감

// 9. Ternary operator: [?] 간단한 질문경우 if대신 사용
// condition? value 1 : value2 ;
console.log(name === 'dong' ? 'yes' : 'no');
//dong이 ture 이면 왼쪽 yes false 이면 오른쪽 실행.
//? 너무 많으면 가독성 떨어지니까 if나 swich 사용

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type check in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');// switch ()안값이 const와 일치하면
        break; //(멈춤)
    case 'Chrome':
    case 'Firefox':
        console.log('love U!');
        break;// Chrome과 FireFox 출력값이 동일하므로 반복할 필요없이
        //case를 연달아 붙여놓으면 자동적으로 묶어서 출력됨.
    default:
        console.log("same all~");
        break;
}
// if에서 else if를 여러개 반복할 경우 switch 사용 고려


//11. loops(반복문)
//while loop, while the condition is truthy,
//false로 나오기 전까지는 무한대로 계속 돎
//body code is execured.
let i = 3;
while (i>0) {
    console.log(`while:${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
do {
    console.log(`do while:${i}`);
    i--;
} while(i>0);

//먼저 block을 실행한 후 조건이 맞는지를 검사하고 싶다면 사용
//조건문이 맞을때만 block 실행하고 싶다면 while.

//for loop, for(begin; condition; step)
//begin을 처음에 1번만 호출 한뒤 block실행하기 전에 condition 검사한
//다음에 block이 다 실행되면 step을 실행; condition이 안맞을때까지 반복실행 
for (i=3; i >0; i--) {
    console.log(`forL ${i}`);
}

for(let i =3; i>0; i=i -2){
    //block안에 지역변수 선언후 작성하는 경우
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}


//nested loops
for (let i=0; i<10; i++) {
    for (let j =0; j <10; j++){
        console.log(`i: ${i}, j:${j}`)''
    }
}
//for문 안에 또 for 작성한 경우
//i가 0일떄 j0-9 돌리고 , i가 1일때 j0-9 돌리고반복
//O= n의2제곱이므로 CPU에 안좋음. 되도록이면 피하는게 좋음

//break, continue
//01. iterate from 0 to10 and print only even numbers(짝수만) (use continue)
//02. iterate from 0 to10 and print numbers until reaching 8(use break)


//01.
for (let i=0; i< 11 ; i++){
    if (i% 2 !==0) {
        continue;
    }
    console.log(`q1. ${i}`);
}


//02.
for(let i=0; i<11; i++){
    if(i>8); {break;}
    console.log(`q2. ${i}`); 
} 




