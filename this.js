console.log(this);

var user = {
    firstName : "Raman",
    courseCount : 32,
    getCousreCount: function (){
        console.log("Line 7", this);
        function sayHello () {
            console.log(`Rishabh is a cute little baby`);
            console.log("lINE 9", this);
        }
        sayHello();
    },
};
// running the below  method . 
// below method id not a regular function call , it is through an object
user.getCousreCount()
// tHIS IS REGUALR FUNCTION
function sayHello (){
    console.log("hELLO");
}
sayHello()
