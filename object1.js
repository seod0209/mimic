const obj1 ={}; 
const obj2 = new Object(); 

function print(person) {
    console.log(person.name);
    console.log(person.age); 
}

const ellie={name: 'ellie', age:4};
print(ellie);


console.log(ellie.name); 
console.log(ellie['name']); 

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie,'name');

const person1 ={name:'bob', age:2};
const person2 ={name:'steve', age:3};
const person3 ={name:'dave', age:4};
const person4 =makePerson('ellie',30);

console.log(person4);
function makePerson(name,age){
    this.name=name;
    this.age=age;
}

console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


console.clear();
for(key in ellie){
    console.log(key);
}

const array= [1, 2, 4, 5];
for(value of array){
    console.log(value);
}

const user= {name: 'ellie', age:'20'}; 
const user2= user;
user2.name='coder';
console.log(user);

const user4 ={};
Object.assign(user4, user);
console.log(user4);

const fruit1= {color: 'red'};
const fruit2= {color: 'blue', size:'big'};
const mixed= Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);