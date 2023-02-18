var user = {
    firstName : "Rishabh",
    lastName : "Yadav",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true
};

// console.log(user.facebookSignedIn);   prefered way
// console.log(user[lastName]); it willgive error 
// console.log(user["lastName"]);  code is Written in this way

// we can manipulate or update the data
// user.loginCount = 52;
// user.firstName = "Raman Yadav"
// console.log(user.loginCount);
// console.log(user.firstName);

// console.table(user);
// console.timeLog(user)


var iphone = {
    Ram : 32;
    color : Silver;
    size : ["5.44 inch"];
    display : Retina HD display;
    chip : M1;
    Camera : ["12MP"];
    faceTime : ["1080HD recording"];
}

console.log(iphone);