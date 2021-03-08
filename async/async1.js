"use strict";

function fetchUser() {
    return new Promise((resolve, reject)=> {
        resolve ('ellie');
    });
}

const user =fetchUser();
console.log(user);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    return 'A';
}

async function getBanana(){
    await delay(1000);
    return 'B';
}

async function pickFruits(){
    const applePromise= getApple();
    const bananaPromise= getBanana();
    const apple= await getApple();
    const banana= await getBanana();
    return `${apple}+${banana}`;
}
pickFruits().then(console.log);

function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);

}
pickOnlyOneFruits().then(console.log);