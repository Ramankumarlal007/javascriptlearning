var users = ["Ted", "Tin", "Tom", "Sam", "Sor", "Sod"];
// slice : (1,4)  value 1 is include start value , 4 is excluded it is end value. 
// so started from Tin and end at Sam
// [ 'Tin', 'Tom', 'Sam' ]
// console.log(users.slice(1,4));
// Only 1 value Ted is sliced of [ 'Tin', 'Tom', 'Sam', 'Sor', 'Sod' ] console.log(users.slice(1));
console.log(users.slice(2));
// slice(2) 2 values are sliced from beginning console.log(users.slice(2)); index 0 and 1
console.log(users.slice(2,5)); 
// Include index 2 and exclude index 5 and give me the output console.log(users.slice(2,5)); 
