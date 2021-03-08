'use strict';
//array 내가 제일 좋아하는 파트!!!! 카페에서 커스텀 추가하는거같아서 재미있음

//1. declaration
const arr1= new Array();
const arr2=[1.2];

//index position
const fruits= ['apple','water']
console.log(fruits);
console.log(fruit.length);
console.log(fruint[0]); //배열번호를 넣으면 배열안의 값이 나옴.
console.log(fruits[3]);//배열밖의 번호를 넣으면 안나옴.

console.clear();

//3.looping over an array
//print all fruits.
for(let i=0, i< fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit)=> console.log(fruit);

//4. addition, deletion, copy
//push:add an item to the end
fruits.push('sugar','ice');
console.log(fruits);
//pop: remove an item from the end

fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
//shift :remove an item from the beginning
fruits.unshift('cup','straw');
console.log(fruits);

fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push
//뒤에서 데이터 넣으면 기존 데이터들이 움직이지 않아도 되서 
//앞에서 데이터 넣으면 기존데이터를 옮겨 넣고 비운다음 새로운 데이터 넣어야됨.
//배열길이가 길수록 

//splice: remove an item by index positon지정된 위치의 데이터 삭제
fruits.slice(1); //몇개지울건지 설정안하면 배열0이후 배열1부터 싹지워짐
console.log(fruits);

fruits.slice(1,2);
console.log(fruits);

fruits.slice(1,2,'choco', 'straw');//지워진 자리에 원하는 데이터 채워짐

//combine 2 arrays

const fruits2= ['2', '3']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//indexOf: find the index

console.clear();
console.log(fruits);
console.log(fruits.indexOf('choco'));
//inclueds
console.log(fruits.includes('banana'));
console.log(fruit.indexOf('banana'));

//lastIndexOf
console.clear();
fruits.push('choco');
console.log(fruits);
console.log(fruits.indexOf('choco'));
console.log(fruits.lastIndexOf('choco'));


