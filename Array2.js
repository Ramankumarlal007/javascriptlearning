var countries = ["India", "USA", "Japan", "Russia","China"];

var states = new Array("Bihar", "Delhi", "Mumbai", "Assam");

// accessing the values

// console.log(states);
// console.log(countries);
// console.log(states[2]);Whatis present at index 2
// console.log(states.length); length of array.
// to replace any value 
// states[0] = "Uttar Pradesh"
// console.log(states);

var user = ["rishabh", "rishah@gmail.com", 3, 34, true];
// console.log(user);
// pop :- to get rid of the last array value here it is true
// user.pop();
// user.pop()
// user.pop();
// user.pop()
// to get rid of the value presentat start
// shift and unshift
let user2 = ["rishabh", "rishah@gmail.com", 3, 34, true];
// user2.unshift("Raman");  Raman got added and other's got shifted
user2.unshift("Raman1", 2, true, false)
// console.log(user2);
// Shift
user2.shift();
// console.log(user2);
var states1 = new Array("Bihar", "Delhi", "Mumbai", "Assam",3);
// console.log(states1.indexOf("Delhi")); it is 1
// console.log(states1.indexOf("new")); but new is not present it's index is -1 and it is handy 
// to get a comparison if else, or to show a popoff messge ,or nottodelete instanceof.

// String to Array
console.log(Array.from("switzerland"));

let result2 = [2,44,36,82].every((e) => (e % 2 === 0));
console.log(result2);