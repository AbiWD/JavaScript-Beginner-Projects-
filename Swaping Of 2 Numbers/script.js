var a = prompt(" Please enter the a number:");
var b = prompt(" Please enter the b number:");
alert(`The value of a is ${a}, The value of b is ${b}`);

var temp;

temp = a;
a = b;
b = temp;

alert(`After swapping \n The value of a = ${a}, The value of b = ${b}`);



// Another swapping logic that can be used>>>

// var a = parseInt(prompt(" Please enter the a number:"));
// var b = parseInt(prompt(" Please enter the b number:"));
// alert(`The value of a is ${a}, The value of b is ${b}`);

// a = a+b;
// b = a-b;
// a = a-b;

// alert(`After swapping \n The value of a = ${a}, The value of b = ${b}`);
