import { takeRight } from "lodash";

const person = { name: "Savannah" };
// person.name = "Something new"; // This is BAD!

// * Solution 1. 

const updatedMeh = Object.assign({}, person, { name: "Bob" });

// * Solution 2. 

const updated = { ...person, name: "Bob" };
console.log(updated);

// This is okay, but it only does a shallow copy. If we add a nested object to our object watch what happens

const personWithNested = { 
    name: "Savannah", 
    address: { 
        country: "UK", 
        city: "London" 
    } 
}

const updatedNested = {...personWithNested, name:"Bob"}
updatedNested.address.city = "Manchester";
// console.log(personWithNested.address.city); // This becomes Manchester (nooo!)

// To fix that, we need to do a deep copy for the address aswell

const updatedDeepNested = {
    ...personWithNested,
    address: {
        ...personWithNested.address,
        city: "Manchester"
    },
    name:"Bob",
}

console.log(updatedDeepNested);