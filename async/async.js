

//sytatic sugar
//async & await
//clear style of useing promise

//1. async
function fetchUser() {
    //do network request in 10 sec...
    return 'ellie';
}

const user= fetchUser(); //비동기적 처리를 하지않으면 끝나는 동안 웹페이지 실행 안됨.
console.log(user);


//so

function fetchUser() {
    return new Promise((resolve, reject)=> {
        resolve ('ellie');
    });
}

const user =fetchUser();
user.then(consol.log);
console.log(user); 
//resolve reject를 호출하지 않으면 계속 pending상태
//  그래서 promise안에는 resolve나 reject를 완료해줘야함.

// async  이용하면 바로 promise 로 전환됨.
async function fetchUser() {
        return 'ellie';
    }

const user =fetchUser();
console.log(user);


//2. await
// async 붙은 함수 내에서만 사용가능.
//
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


//cf.
function getBanana(){
   return delay(3000);
    .then(()=> 'B');
}

function pickFruits(){
    return getApple().then(apple=> {
        return getBanana().then(banana=>`${apple}+ ${banana}`);
    });
    
}
pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+')
    );
}
pickAllFruits().then(console.log);