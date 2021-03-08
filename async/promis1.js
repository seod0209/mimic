'use strick';

const promise= new Promise((resolve, reject)=>{
    console.log('doing something...');
    setTimeout(()=>{
        resolve('ellie');

    },2000);
});

promise.finally(()=> {
    console.log('finally')
});

const fetchNumber = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve(1), 1000);
});

 fetchNumber
 .then(num => num*2)
 .then(num => num*3 )
 .then(num =>{
     return new Promise((resolve,reject)=> {
         setTimeout(()=> resolve(num-1), 1000);
     });
 })
 .then(num => console.log(num));

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
  .catch(error=> {
      return'bread';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

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

