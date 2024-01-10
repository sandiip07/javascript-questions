// console.log("hey javaScript");

// var = It has the globle scope , can declare multiple times with the same name variable;
// let = block scope , (Es6) , can't declare multiple times with the same name variable
// const = block scope , (Es6),can't declare multiple times with the same name variable

// ===========VAR========
var Name = "Krishna";

const print = () => {
    var Name = "hare";
    console.log(Name);
}

print();
var Name = "Krishna";
console.log(Name);

// ===========LET========
let Name = "Krishna";

const printLet = () => {
    let Name = "hare";
    console.log(Name);
}

printLet();
 let Name = "rama" //{ Error here cant declare again }
console.log(Name);

// ===========CONST=========

const Name = "hey";
Name = "bye"
console.log(Name);

// ==========================typeof()

// To check the type of value

const number = 100;
console.log(typeof(number));
outPut = number

// ==========================  (==) vs (===)

const num1 = "10";
const num2 = 10;

console.log(num1 == num2); //true {only check the values}
console.log(num1 === num2);// false { check values with its type}

// ========================== spread Operator

// whenever we want to copy the property of any object/array to another object/array without using the inheritence then we use the spread operator (...)
 const st1 = {
  Name: "rama",
  age: 20,
  gmail: "rama@gmail.com",
  country: "india",
};

const st2 = {
  ...st1,
  age: 25,
  gmail: "krishna@gmail.com",
};

console.log(st2); 

// Copy Artay

const arr1 = [1,2,3,4];
const arr2 = [...arr1,6,7,8,9]

console.log(arr1);
console.log(arr2);

// =====================pass by value and pass by reference
// CALL BY VALUE
const num = (a,b) => {
    a = 1000;
    b = 2000;
}

const a = 1;
const b = 2;
console.log(`after call a = ${a} and b = ${b}`);

num(a,b)
console.log(`after call a = ${a} and b = ${b}`);

// call by reference

const callByReference = (student) =>{
    student.mark = 90;
}

const student ={
    name : "ram",
    mark:100
}

console.log(`before caliing ${student.mark}`); // 100
callByReference(student);
console.log(`after caliing ${student.mark}`); // 90

// ================call backs
// the callback means the functions which is execute after its main function will executed succesfully

function name(name , callBack) {

console.log("good morning " + name);
callBack();

}

function surName()
{
  console.log("Ahirwar");
}

name("sandeep" , () => {
  name("Aarti" , () => {
    name("Asha" , () => {})
  })
})

// =====================Promises

// three stage;

// 1). pending
// 2). filfilled -> then [resolve]
// 3). reject -> catch [reject]

let pro = new Promise((resolve, reject) => {
  console.log("i promise");
  // reject("i am error");
  resolve("i am resolved");
})

console.log(pro);

pro.then((msg) => {
    console.log(msg);
  })
  .catch((e) => {
    console.log(e);
  });

// =====================Promises chaining
function getData(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(data);
      res("data");
    }, 2000);
  });
}

console.log("fetching data....");
getData(20).then(() => {
  console.log("fetching data...");
  getData(30).then(() => {
    console.log("fetching data...");
    getData(40).then(() => {
      console.log("fetching data...");
      getData(500);
      console.log("All data fetched...");
    });
  });
});

// =========================async await- reduce the code of promise
 function getData(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(data);
      res("data");
    }, 2000);
  });
}

  const fun = async() => {
  console.log("fetching data...");
  await getData(10);

  console.log("fetching data...");
  await getData(20);

  console.log("fetching data...");
  await getData(30);

  console.log("fetching data...");
  await getData(40);
}
fun();

// ===============Hoisting
// its means over js engine declare our varibale top of the code so that we can use them brfore their definition.
// we also call our function before its defitition due to hoisting

console.log(x); // undefind

var x = 2;

name();// normal run
function name(){
  var x = 10;
  console.log(x);
}

// =============isNaN() = is not a number = it check value should mot be number

console.log(isNaN(10)); //F
console.log(isNaN("10")); //F
console.log(isNaN(undefined)); //T

// ================higher order function
// the function which takes a function as argument and returns a function is called higher order function

function higherOrderFunction(name) {
  name();
}

function name(){
  console.log("sandeep dev");
}

higherOrderFunction(name)

// ====

function high(){
  return function inner(){
    console.log("i am inner function");
  }
}

let fun = high();
fun();

// ================this keyword
// it refers to our current object

const emp = {
  name:"rama", 
  designation : "react developer",
  getThis : function(){
     console.log(this);
  }
}

emp.getThis();

//=================call() , bind() , apply()
// 1. call() => jis object ko hum iske andr pass karte hai so it will strictly refer them 

const obj1 = {
  color:'orange',
  size: 200,
  type: "spare",
  getProps : function () {
    console.log(this.color + " " + this.type + " " + this.price);
  }
}

const obj2 = {
  color:'red',
  size: 250,
  type: "square",
  price:1000

}

obj1.getProps.call(obj2);

//=============bin() => it returns a function and work like call
const obj1 = {
  color:'orange',
  size: 200,
  type: "spare",
  getProps : function () {
    console.log(this.color + " " + this.type + " " + this.price);
  }
}

const obj2 = {
  color:'red',
  size: 250,
  type: "square",
  price:1000

 }

 let temp = obj1.getProps.bind(obj2);
 temp();



//============curring == a function returns another function with its next parameter

function n1(a){
  return function n2(b){
    return function n3(c){
      return a*b*c
    }
  }
}

let ans = n1(10)(20)(30)
console.log(ans);


// ==============strict mode
// make javascript strict for their syntax 
// the syntax is : = "use strict"