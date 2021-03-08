'use strict';

const arr1= new Array();
const fruits= ['banana','milk']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);

console.clear();

fruits.forEach((fruit)=> console.log(fruit));

fruits.push('v-icecream','ice');
console.log(fruits);

fruits.pop();
console.fruits;

fruits.unshift('cup','bowl');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1,2,'choco', 'straw');
console.log(fruits);

const fruits2= ['2', '3']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
console.log(fruits);
console.log(fruits.indexOf('choco'));
console.log(fruits.includes('banana'));
console.log(fruits.indexOf('banana'));

console.clear();
fruits.push('choco');
console.log(fruits);
console.log(fruits.indexOf('choco'));
console.log(fruits.lastIndexOf('choco'));