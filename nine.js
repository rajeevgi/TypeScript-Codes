// TypeScript Map Examples
// Example 1
// let map = new Map();
// // set method of map
// map.set("1", "Rajeev");
// map.set(1, "Cnergee");
// map.set(true, 'bool1');
// map.set('2', 'ajay');
// // printing all the values to the console.
// console.log("Value 1 : "+ map.get(1));
// console.log("Value 2 : "+ map.get('1'));
// console.log("Key is Present : "+ map.has(3));
// console.log("Size = "+ map.size);
// console.log("Deleted Value : "+ map.delete(1));
// console.log(" Size = "+ map.size);
let ageMapping = new Map();
ageMapping.set("Rakesh", 40);
ageMapping.set("Abhishek", 25);
ageMapping.set("Amit", 30);
//Iterate over map keys  
for (let key of ageMapping.keys()) {
    console.log("Map Keys= " + key);
}
//Iterate over map values  
for (let value of ageMapping.values()) {
    console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");
//Iterate over map entries  
for (let entry of ageMapping.entries()) {
    console.log(entry[0], entry[1]);
}
