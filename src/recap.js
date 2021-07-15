/* Functional Programming
* Decomposing a problem into smaller functions, 
* takes and input and returns an output.
* More Concise
* Easier to Debug
* Easier to test
* More scalable
*/

// Passing a reference to another variable

function sayHello(){
    return "Hello World";
}

let fn = sayHello; 
fn(); 

// Passing a function as an argument to another

function greet(fnMessage){
    console.log(fnMessage());
}

greet(sayHello);

// Returning a function within a function 

function sayHelloTwo(){
    return function(){
        return "Hello World!";
    }
}

let fn2 = sayHelloTwo(); 
let message = fn2(); 

// Higher order functions

let numbers = [1,2,3]; 
numbers.map(num => num * 2); 

setTimeout(() => console.log(`hello`),2000);


// Get the input, trim it and wrap it around a div element
//.trim() will remove pre and trailing white space
let input = "   JavaScript   "; 

// Solution 1.
let output = "<div>" + input.trim() + "</div>";

// Solution 2. (Better)
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;

// Function composition
const result = wrapInDiv(trim(input));