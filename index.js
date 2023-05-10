/*
console.log("I like pizza!");
console.log("testing testing");

window.alert("HELLO!");

//this is a comment

/*
this is a comment block
*/

//------------------------------------------------------
/*
//A variable is a container for storing data
//a variable behaves as if it was the value that it contains

//two steps:
//1. declaration (var, let, const)
//2. assignment (= assignment operator)

let age; 
age = 77;
//or
let age2 = 100; //number
age2 = age2 - 50

let firstName = "Andy"; //string

let student = true; //booleans


console.log(age);
console.log(age2);
console.log("Hello", firstName);
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "Hello, you are " + age;
document.getElementById("p3").innerHTML = "Hello " + student;
*/


//---------------------------------------------------------

/*
//arithmetic expression is a combination if 
//operands (values, variables, etc.)
//operators (+ - * / %)
//that can be ecaluated to a value
//y = x + 5;


//+=, -=, *=, /=

let students = 20;

//students = students * 2;
let extraStudents = students % 3



console.log(students);
console.log(extraStudents);
*/

//-----------------------------------------------------------

/*
// how to accept user input

// easy way with a window prompt 

//let username = window.prompt("What's your name?");
//console.log(username);

// difficult way HTML textbox
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;

}
*/

// --------------------------------------
// type conversion = change the datatype of a value to another
//                              (strings, numbers, booleans)
/*
let age = window.prompt("how old are you?");
console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");
*/
/*
let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("sdf");  //empty = false, anything in it is true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

//--------------------------------------------------
// const = a variable that can't be changed
/*
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("the circumference is:", circumference);
*/

//-------------------------------------
//math
/*
let x;
let y = 5;
let z = 9;
let max;
let min;


//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//max = Math.max(x, y, z);
//min = Math.min(x, y, z);
x = Math.PI;


console.log(x);
*/

//-----------------------------------------
//hypotenuse program
/*
let a;
let b;
let c;
*/
/*
a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("side C:", c);
*/
/*
document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}
*/

//------------------------------------------
//counter program
/*
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}
*/





























