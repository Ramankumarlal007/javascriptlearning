// node Array.js


// let nums = [5,7,6,4]
// console.log(nums);

// console.log(nums[3]);

// let a = nums[2];
// console.log(a);

// This array will be assinged to [a,b,c,d]
// let nums = [5,7,6,4];  
// destructuring
// let [a,b,,d] = nums;

// console.log(d);
// let [a,b,d] = nums;

// console.log(d);

// let num = [5,7,6,4]; 
// // extra comma is imp to get the correct output
// // let [a,b,,d] = nums;
// let [a,b,d] = num;

// console.log(a);

// let a =5;
// let b =6;
// // swapping of 2 numbers in Array
// [a,b] = [b,a];
// console.log(a,b);


// create an array  of String
// create an array of words
// let words = "My name is Rishabh kumar Yadav";
// console.log(words);
// result : My name is Rishabh kumar Yadav
// i want to split it into Array 
// for this split this string based on space is to be used
// afterusing split the words/string now becomesan Array
// let words = "My name is Rishabh kumar Yadav".split(' ');
// console.log(words);
// [ 'My', 'name', 'is', 'Rishabh', 'kumar', 'Yadav' ]

// //  let assign this array words to a  variables
// let [a,b,c,d,e,f] = words;
// console.log(a,b)
// console.log(d,e,f);
// // My name    result
// Rishabh kumar Yadav
let words = "My name is Rishabh kumar Yadav Raman kumar yadav".split(' ');
// console.log(words);
let [a,b,c, ...d] = words;
console.log(d)
// when we use ...d then a,b,c is assinged to respective array index value and rest is 
// given to ... no matter how many is left