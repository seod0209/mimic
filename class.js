'use strict';

//Object-oriented programing
//class: template
//object: instance of a calss
//Javascript classes
//-introduced in ES6
//-syntactical sugar over prototype-based inheritance.

//1.Class declarations
class Person{
    //constructor(생성자)
    constructor(name,age){
    //fields(데이터 할당)
    this.name= name;
    this.age= age;
 }
 //method
 speak(){
     console.log(`${this.name}: hello`);
 }
}

const ellie = new Person('ellie', 20) // 새로운 object만들때는  new  붙이기
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and Setters

class User{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    
    get age() {
        return this._age;
    }

    set age(value){  //set은 값을 설정하기때문에 Value받아옴
        //if (value<0) {
        //throw Error('age can not be negative');
        //}
        this._age=value<0 ? 0:value;
    }
}


 //get을 설정하면 'this.age'는  메모리에 올라간 데이터가 아닌 바로 getter를 호출
    //set을 정의하면 '=age;'를 호출할때(값을 할당 할때) 바로 메모리의 값을 할당하는 것이 아닌 setter를 호출
    //set내에서 전달된 value를 'this.age'에 할당 할때 메모리의 값을 업뎃하는게 아니라
    //'=value;'는 또 set을 호출. set으로 돌아와 무한정 반복

//위 문제를 해결하기 위해 get과set에 사용되는 변수이름을 조금다르게 설정필요
//User라는Class 안에는 총 3개의 field가 존재하게됨:firstName, lastName,_age
const user1= new User('Steve', 'job', -1);
console.log(user1.age);

//3.Fields (public, private)
//too soon(너무 최근에 추가된것.많은 자바스크립트사용자가 쓰고있진 않음)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

class Experiment{
    publicField =2; // construct를 사용하지않고 field정의 가능
    // 그냥 정의한 경우 외부에서 접근 가능
    #privateField=0; //#붙이면 class 내부에서만 수정,접근 가능. 외부에서는 불가능
}
const experiment= new Experiment(); 
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//too soon
class Article{
    static publisher= 'dream';
    constructor(articleNumber) {
        this.articleNumber= articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1= new Article(1);
const article2= new Article(2);
console.log(Article.publisher);
Article.printPublisher //object상관없이 공통적으로 class사용될수있는 거라면 static 활용

//5. Inheritance(상속)
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width= 'width';
        this.height= 'height';
        this.color= 'color';
    }
//shape이라는 class 안에는 width, height, color 세가지의  fields 가 있음
    draw() {
        console.log( `drawing ${this.color} color of`);
    }

    getArea(){
        return this.width* this.height;
    }

//method로는 draw와 getArea 총 2개가 존재함.
}

class Rectangle extends Shape {}
//extend로 Shape연결해주면 정의가 자동적으로 포함됨

const rectangle= new Rectangle(20,20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

//상속을 활용하면 공통된 것들을 일일이 작성하지 않아도 
//extend를 이용해 동일한것들을 재사용 가능
class Triangle extends Shape {
    draw() {
        super.draw(); //super.이용해 부모함수 호출
        console.log('스'); // 
    }

    getArea(){
        return this.width*this.height/2;
}
//필요한것만 추가;overwriting
const triangle= new Triangle(20,20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf
//왼쪽의 object가 오른쪽의 Class의 instance 인지 아닌지 확인
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t(contend로 상속)
console.log(triangle instanceof Object); //t (모든 class는 object 자동상속)
