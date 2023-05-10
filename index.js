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




