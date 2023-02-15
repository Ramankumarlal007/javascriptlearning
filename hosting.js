// var num =2;
// function sayMe() {
//     // at console.log execution context kicks in and goes out
//     console.log("Rishabh is a good boy.");
// }
// // at sayMe() execution context runs as here entire function need to be executed. 
// sayMe()

// tipper at this place b4 function also gets the result as 85 as here global context
// scans the entire code and helps in executing
// if function is comment by (/) then it will give error as now here function  is not defined
tipper("80");
function tipper(a){
    var bill = parseInt(a);
    // var bill = a;
    console.log(bill + 5);
}

// tipper(5);
// tipper("80");

// bigTipper("200")
// function bigTipper(a){
//     var bill = parseInt(a);
//     console.log(bill +15);
// }

// Another way by declaring a variable
// bigTipper("200")
// TypeError: bigTipper is not a function , 
// bcoz vaiable is undefined global context doesn't know about it.
var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill +15);
}
// bigTipper("200")
// Here it works scanned and executed by global context.
bigTipper("200");

// example 2 
// accessing the variable b4 var deceleartion is undefined . it is diff from an error , 
// error means it isnot available. undefinmed means global contesxt knows it 
// but u r accesss beforeso it is unefined
console.log(name);
var name = "Raman Yadav";
// console.log(name);