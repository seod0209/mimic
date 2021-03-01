//1. Use strict
//added in ES5
//use this for Valina Javascript.ES5

'use strict';

//2. Variable, rw(read/write)
//let(added in ES6):mutable
let name='dongee'
console.log(name);
name= 'hello';
console.log(name);


// Block scope; {} vs. global scope
let globalName='global name';
{
    let name= 'dongee'
    console.log(name);
    name='hello';
    console.log(name);
}

console.log(name);
console.log(globalName);

//var(don' ever use this)
//var hoisting(move declaration form bottom to top)
//has no block scope


age=4
var age;
console.log(age);

//3. constants(선언후 값이 변경 안됨), r(read only)
// use const whenever possible.
// only use let if variable needs to change


//Immutable data types: premitive types, frozen objects(i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
//-security
//-thread safety
//-reduce human mistakes(나중에 바꿀때)

const daysInweek=7;
const maxNumber=5;

//4. variable data types(메모리 저장방식)
//primitive(value, 즉 메모리값 자체가 저장됨)
//: sigle itme(최소단위): number, string, boolean, null, undefiedn, symbol
//object(너무커서 한번에 메모리에 다 못올림, ref 로 ob있는곳 가리키고 ref가 저장됨)
//: box container(여러개의 싱글단위들을 묶어서 관리)
//function, first-class function

const count=17; //integer
const size=17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number-special numeric values: infinity.-infinity.NaN
const infinity= 1 / 0;
const negativeInfinity= -1 / 0;
const nAn= `not a number` /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt( fairly new, don' use it yet;firefox,chrome)
const bigInt= 124567890n; //over (-2**53~2**53)
console.log(`value: ${bigInt}, type:${typeof bigInt}`)

//string
const char='c';
const brendan='brendan';
const greeting='hello' + brendan;
console.log(`value: ${greeting}, type:${typeof greeting}`);
const helloBob=`hi ${brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false:0, null, undefined, NaN, '빈스트링'
//trueL: any other value
const canRead= true;
const test= 3<1;  //false
console.log(`value: ${conRead}, type:${typeof canRoad}`);
console.log(`value: ${test}, tyep: ${typeof test}`);


//null(무저건 empty라고할당)
let nothing= null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


//undefined(할당 or 선언되었지만 값지정not)
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects(고유식별자 만들때, 
//동시다발적인경우 우선순위 두고싶을때)
//심볼은 동일한 (스트링)id로 만들어도 고유식별자이므로 서로 다름. 
const symbol1= Symbol(`id`);
const symbol2= Symbol(`id`);
console.log(symbol1=== symbol2);

//동일한 심볼만들고 싶으면 
const gSymbol1= Symbol.for('id');
const gSymbol2= Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
//심볼은 바로 출력 안됨. .description이용해서 스트링으로 바꿔서 출력해야함.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const dongee={name: 'dongee', age:20};
dongee.age=28

// 5. Dynamic typing: dynamically typed language
//TS발생의 원인;자바스크립트위에 타입올림
let text= 'hello';
console.log(text.charAt(0));
console.log(`value:${text}, type: ${typeof text}`);
text='1';
console.log(`value: ${text}, type:${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type:${typeof text}`);
text='8'/'2';
console.log(`value: ${text}, type:${typeof text}`);
console.log(text.charAt(0));














