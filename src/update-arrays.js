const numbers = [1,2,3];

// adding an item 
const added = [...numbers, 4];

// To add to a specific position [1,2,4,3]
const index = numbers.indexOf(2);
const addedPos = [
    ...numbers.slice(0,index),
    4,
    ...numbers.slice(index)
];
console.log(addedPos);

// removing an item (2)
const removed = numbers.filter( n => n!==2);


// Updating - replace 2 with 20.
const updated = numbers.map(n => n===2 ? 20 : n);
console.log(updated);