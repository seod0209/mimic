//json
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)

let json= JSON.stringify(true);
console.log(json);

json =JSON.stringify(['apple', 'banana']);
console.log(json);

//overloading: 함수이름은 동일하지만 어떤  parameter,몇개 전달하냐에 따라 다른방식으로 호출가능

const rabbit={
    name: 'tori',
    color:'white',
    size:null,
    birthDate: new Date(),
    jump: () =>
        console.log('${name} can jump!');
    },

};

json= JSON.stringify(rabbit);
console.log(json);

json= JSON.stringify(rabbit, ['name', 'color']);
console.log(json);


json= JSON.stringify(rabbit, (key, value)=> {
    console.log('keyL ${key}, value:${value}');
    return key === 'name' ?  'ellie': value;
});
console.log(json);
//2. JSON to Object
//parse(json)

console.clear();
json= JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());