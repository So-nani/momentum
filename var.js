const a = 5;
const b = 2;


let myName = "Son Hani";
let veryLongVariableName = "This is a very long variable name that should be shortened for better readability";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log("hello "+ myName);
console.log(veryLongVariableName);

myName = "Not Son Hani";
console.log("hello "+ myName);


const amIFat = null; // defined
let somthing;
console.log("Am I fat? " + amIFat);
console.log(somthing, amIFat); // undefined



const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// get item from array
console.log(daysOfWeek);

// add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// const player = {
//   name : "nico",
//   points: 10,
//   fat : true,  
// };
// console.log(player);
// console.log(player["name"]);

// player.points = player.points + 15;
// console.log(player);


function sayHello(nameOfPerson, age) {
  console.log('Hello! My name is ' + nameOfPerson + ' and I am ' + age + ' years old.');
}

sayHello("Nana", 10)
sayHello("Sakura", 12)
sayHello("Max", 24)

function plus(a, b) {
  console.log(a+ b);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(98, 2);

const player = {
  name : "Sony",
  sayHello : function(otherPersonName) {
    console.log("hello! " + otherPersonName + " nice to meet");
  }
};

console.log(player.name);
player.sayHello("Nana");