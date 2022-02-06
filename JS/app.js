'use strict';
var Name = window.prompt("Enter your name: ");

var gender = window.prompt("Enter your gender (male or female) : ").toLowerCase();

var age = window.prompt("Enter your age: ");
if (age <= 0) {
    alert('The age is less than or equal to zero.')
    age = prompt('enter the age')
}
var welcome = window.prompt("if you wants to skip the welcoming message write yes");


if (welcome != 'yes')
 { if(gender!='male'&&gender!='female')
 {
     alert('gender is invalid')
     alert('hello '+Name)
 }
    else if (gender == 'male') {
        alert('Hello Mr ' + Name + '..')
    } else if (gender == 'female') {
   
    alert('Hello Ms ' + Name + '..')
}

}

 
var task1= prompt('do you read a book in the week ?');
console.log(`${task1}`);

if (task1.length === 0) {
  task1=== "invalid"
}

var task2= prompt('do you have a job ?');
console.log(`${task2}`);

if (task2.length === 0) {
  task2 === "invalid"
}

var task3= prompt('do you love animals ?');
console.log(` ${task3}`);

if (task3.length === 0) {
  task3 === "invalid"
}