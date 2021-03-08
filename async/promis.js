'use strick';

//Promise is a JavaScript object for asynchronous operation.
//State: pending ->fulfilled or rejected
//Producer vs. Consumer

//1. Producer
// when new Promise is created, the executor runs automatically
// promise가 만들어지는 순간 동작
// 사용자가 버튼누른경우만 네트워크 통신하도록 하려면 promise말고

const promise= new Promise((resolve, reject)=>{
    //doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        //resolve('ellie');
        reject(new Error('no network'));

    },2000);
});

//2. Consumers: then, catch, finally
promise//
.then((value)=>{
   console.log(value);
.catch(error=>{
    console.log(error);
}) //chaining
.finally(()=> {
    console.log('finally')
}); // 성공, 실패 상관없이 어떤기능을 마지막으로 수행하고 싶을때

//3. Promising chaning
const fetchNumber = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve(1), 1000);
});

 fetchNumber
 .then(num => num*2) //값
 .then(num => num*3 )
 .then(num =>{
     return new Promise((resolve,reject)=> { //promise
         setTimeout(()=> resolve(num-1), 1000);
     });
 })
 .then(num => console.log(num));
//총2초 소요

//4. Error Handling

const getHen = () =>
 new Promise((resolve, reject)=> {
     setTimeout(()=> resolve(`H`),1000);
 });

 const getEgg= hen =>
 new Promise((resolve, reject)=> {
     setTimeout(()=> resolve(`${hen} => E`),1000);
 });

 const cook= egg=>
  new Promise((resolve, reject)=>{
      setTimeout(()=> resolve(`${egg}=> F`),1000);
  });

  getHen()
  .then(hen => getEgg(hen))  // 한가지만 가져오는 경우생략가능 like, .then(getEgg)
  .then(egg=> cook(egg))
  .then(meal=> console.log(meal));

  // 중간에 Error가 발생한경우 다른것을 대체하고 싶을때 : catch
  const getHen = () =>
 new Promise((resolve, reject)=> {
     setTimeout(()=> resolve(`H`),1000);
 });

 const getEgg= hen =>
 new Promise((resolve, reject)=> {
     setTimeout(()=> reject(new Error(`error! ${hen}=> E`)),1000);
 });

 const cook= egg=>
  new Promise((resolve, reject)=>{
      setTimeout(()=> resolve(`${egg}=> F`),1000);
  });

  getHen()
  .then(getEgg)
  .catch(error=> { //
      return'bread';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);


  //5. callback to Promise

  class UserStorage{
    loginUser(id, password){
        return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(
                (id === 'ellie' && password ==='dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                resolve(id);
            } else{
                reject(new Error('not found'));
            }

        }, 2000);
    });
}

    getRoles(user) {
            return new Promise((resolve, reject)=> {
                setTimeout(()=>{
            if(user==='ellie'){
                resolve({name: 'ellie', role: 'admin'});
            } else{
                reject(new Error('no access'));
            }

        }, 1000);

    });
}
}

const userStorage = new UserStorage();
const id= prompt('enter ur id');
const password= prompt ('enter ur password');
userStorage
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user=> alert('Hello ${userWithRole.name}, you have a ${userWithRole.role} role'))
.catch(console.log);

