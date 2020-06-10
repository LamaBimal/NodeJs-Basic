var {sum,subtract} = require('./add.js');

console.log("Hello world");
var a = 10;
var b = a*3;

console.log("b is "+b);

function greet(name){
    console.log(" Hello "+name+" !!");
}

greet("bimal");
console.log(sum(5,6));
console.log(subtract(6,3));