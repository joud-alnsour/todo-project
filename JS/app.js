'use strict';
var Name = window.prompt("Enter your name: ");

var gender = window.prompt("Enter your gender (male or female) : ");

var Age = window.prompt("Enter your age  (>=0) : ");

var welcome  = window.prompt("if you wants to skip the welcoming message write yes");
 
 if (gender=='male'&&welcome!='yes')
{var x='Hello Mr '+ Name + '..';
alert(x)

}else if (gender=='female'&&welcome!='yes'){
    var x='Hello Ms '+ Name + '..';
    alert(x)
}else if (welcome=='yes'){
    prompt('Enter you email:')
}else
alert('Welcome our website');
