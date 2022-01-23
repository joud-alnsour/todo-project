'use strict';
var Name = window.prompt("Enter your name: ");

var gender = window.prompt("Enter your gender (male or female) : ").toLowerCase();

var age = window.prompt("Enter your age: ");
if (age <= 0) {
    alert('The age is less than or equal to zero.')
    age = prompt('enter the age')
}
var welcome = window.prompt("if you wants to skip the welcoming message write yes");

var Hi = window.prompt("do you read a book in the week ?");

var Person = window.prompt("do you have a job ?");


var People = window.prompt("do you love animals ?");

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

function task (ask)
{
let reply =[];
for (let index = 0;index < ask.length; index++)
{
    let firstreply =prompt(ask[index]).toLowerCase();
    if (firstreply ==='')
    {
        reply.push('invalid');}
        else if(firstreply === 'yes' || firstreply === 'no')
        {
          reply.push(firstreply);
        }
        else{
          alert('invalid');
        }
    }
        console.log(reply);
        return reply;
}

task (['do you read a book in the week ?','do you have a job ?','do you love animals ?']);
