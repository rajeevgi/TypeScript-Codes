// TypeScript Set

let mySet = new Set();

mySet.add("Rajeev");
mySet.add("Asad");
mySet.add("Disha");
mySet.add("Snehal");
mySet.add("Rohit");

// Returns Set data 
console.log("The set values are : "+ mySet);

// check value is present or not?
console.log(mySet.has('Rajeev'));

// checking size
console.log("The size of set : "+ mySet.size);

// Delete a value from set
console.log("Deleted value : "+ mySet.delete('Rohit'));
console.log("The size of set : "+ mySet.size);

// Clear whole set
mySet.clear();

console.log(mySet);

mySet.add("Diksha");

console.log(mySet);
