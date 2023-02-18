var users = ["Ted", "Tin", "Tom", "Sam", "Sor", "Sod"];
// console.log(users.splice(2,3));  2 is start Value, 3 is count value [ 'Tom', 'Sam', 'Sor' ]
// console.log(users.splice(2,2)); [ 'Tom', 'Sam' ]

// console.log(users.splice(1,4)); [ 'Tin', 'Tom', 'Sam', 'Sor' ] start from 1 
// count upto 4 numbers and give me the value

users.splice(1, 3, "HI");
console.log(users);
[ 'Ted', 'HI', 'Sor', 'Sod' ]

