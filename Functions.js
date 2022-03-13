functions

function helloWorld() {
    console.log('hello world!')
}
helloWorld(); // hello World!

function helloWorldFrom(name){
    console.log('Hello world! this is '+ name);
}
helloWorldFrom('anthony'); 

function add(x, y){    //providing two parameters 
    return x + y;      // returning the sum of two numbers 
}
add (1, 2);            // just returning a value. not logged to the console..
var result = (2, 4);
console.log(result); //6 

(console.log(add (1, 2)); //this will utilized the return value and log to console. 