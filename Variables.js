6.Variables
// The variables serve as a name to a value, undefined will return when the command doesnt return a value.
 //Variables are used to hold data, there are three different types of variable declaration in JavaScript, nameley var let const.

var fruits = ['apple', 'pear', 'orange', 'banana'];  //var fruits is a variable serve as a name to a value of ['apple', 'pear', 'orange', 'banana']
//x
fruits[0]        //apple
fruits[1]        //pear
fruits.length    //4 

for (var i = 0; i < array.length; i++) {
    var fruit = fruits[i]; // first time iterating through for loop.. values to[0]- first element in said array. 
    if (i % 2 === 0) {     //i is  checked to the zero mod operator(is 'i even?) a remainder check.. if "i is divided by 2, would remain even?"
        console.log('even ' = fruit); //even apple
    } else {
        console.log('odd ' + fruit); //..odd pear