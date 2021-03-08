'use strict';

//JavaScript is synchronous(동기).
//Execute the code block in order after hoisting.
//hoisting: var, function declaration: 호이스팅 이후 코드가 나타나는 순서대로 자동실행

console.log('1'); //동기
setTimeout(function(){
    console.log('2');
}, 1000); //1000milisecond= 1초 //비동기

console.log('3'); //동기

//Sychronous callback 즉각적
function printImmediately(print) {
    print();
}
printImmediately(()=> console.log('hello')); //동기


//Asynchronous callback 언제동기될지 모름
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);//비동기


//callback hell:   가독성 떨어짐. 연결성 가늠어렵, 비즈니스로직 알아보기 어렵
//디버깅할경우 어렵. 유지보수 어렵
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=> {
            if(
                (id === 'ellie' && password ==='dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }

        }, 2000);
    }
    getRoles(user,onSuccess, onError){
        setTimeout(()=>{
            if(user==='ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }

        }, 1000);

    }
}

const userStorage = new UserStorage();
const id= prompt('enter ur id');
const password= prompt ('enter ur password');
userStorage.loginUser(
    id,
    password, 
    user=> {
        userStorage.getRoles(
            user, 
            userWithRole=> {
                alert('Hello ${userWithRole.name}, you have a ${userWithRole.role} role');
            },
            error => {
                console.log(error);
            }
            );
    },
    error=> {console.log(error)}
);