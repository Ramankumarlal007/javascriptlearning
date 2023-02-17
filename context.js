// calling a function before it is  declared; before function how js renders it? 
// it is all bcosz js is having global context 
// sayhello();

// function sayhello(){
//     console.log("Hello");
// }

if (2===2) {
    console.log("This is True");
}

// let myName = "Rishabh";
if (myName === myName) {
    console.log(`This is again atrue statement
    Nice statement`);
}

// let myName = "Rishabh";
if (myName === window.myName) {
    console.log("This will not get executed in nodejs. ");
}