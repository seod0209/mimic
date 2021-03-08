//object
//one of the Javascript's data types.
//a collection of related data or/and functionality.
//Nearly all objects in Jacascript are instances of Object
//인자가 많아지면 추가할게 많아짐. 관리힘듬.
//object={key: value};

//1. leterals and properties
const obj1 ={}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax


print(name, aga); //
function print(person) {
    console.log(person name);
    console.log(person age); 
}

const ellie={name: 'ellie', age:4};
print(ellie);

ellie.hasJob = true; //뒷북으로 추가 가능. 흔하지 않음. 너무 동적
console.log(ellie.hasJob)// 나중에 유지보수 힘듬. 가능하면 피하기

ellie.hasJob = true;
console.log(ellie.hasJob);
// with JS magig(dynamically typed language)
//can add properties later

delete ellie.hasJob;
console.log(ellie.hasJob);
//can delete properties later

//2. conputed properties
//key should be always string''.
// 정확한 키를 모를때 런타임에서 사용. 실시간으로
console.log(ellie.name); // ,이라는 문법을 이용해서 접근// 
console.log(ellie['name']); //compuited property(배열에서 data를 받아옴)string 형태로
ellie['hasjob']=true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key);
}
printValue(ellie,'name');

//위 예제의 경우 obj에  key라는  property가 들어있는지 모름
//이 경우 computed property 사용

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie,'name');
printValue(ellie,'age');

//4. Property value shorthhand
const person1 ={name:'bob', age:2};
const person2 ={name:'steve', age:3};
const person3 ={name:'dave', age:4};
const person4 =makePerson('ellie',30);

//4. constructor Function
console.log(person4);
function Person(name,age){
    //this={};
    this.name=name;
    this.age=age;
    //return this;
}

//5. in operator:property existence check(key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

//6. for..in vs. for..of
//for(key in obj)
console.clear(); //이전의 모든 key들을 지움
for(key in ellie){
    console.log(key); //ellie 안의 모든 키들이 출력
}

// for(value of iterable) 순차적 배열
const array= [1, 2, 4, 5];
for(let i=o, i<array.length;  i++){
 console.log(array[i]); 
}
// 위 모든 값들을 찍으려면 array의 length만큼 계속 돌면서 i를 순차적으로 늘려감
// 이렇게 하면 굉장히 많이 작성해야함.
//좀더 쉽게하려면 for..of


for(value of array){
    console.log(value);
}
//array의 모든 값들이 할당되면서 블럭안에서 순차적으로 출력/계산 가능


//7.  cloning
//object.assign(dest, [obj1, obj2, obj3...])

const user= {name: 'ellie', age:'20'}; 
const user2= user;
user2.name='coder';
console.log(user);

//obj 복사방법
//oldway
const user3 ={};
for (key in user) {
    user3[key]= user[key];
}
console.clear();
console.log(user3);

const user4 ={};
Object.assign(user4, user);
console.log(user4);

//example.
const fruit1= {color: 'red'};
const fruit2= {color: 'blue', size:'big'};
const mixed= Object.assign({}, fruit1, fruit2); //뒤에나오는거에 덮혀씌움
console.log(mixed.color);
console.log(mixed.size);


