function add(a){
    return function(b){
        return a+b;
    }
}

const add1 = add(1); 
add1(5); 

// We can use currying when we need to have a function with a single parameter
// we can rewrite the above code in an arrow function:

const add2 = a => b => a+b; 

// to call the function: 
add2(1)(5) // add(1,5);