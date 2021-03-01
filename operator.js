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

//6.

