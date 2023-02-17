function isEven(element){
    if (element % 2 ===0) {
        return true;
      
    }
    // return false;  undefined when commented out 
    // otherwise false is printed bcoz of 3
    
} 
var apple = isEven(3)
// console.log(apple);

// console.log(isEven(2));
// lesser code
function isEven(element){
   return element % 2 === 0; 
    }
    // console.log(isEven(2));
// or with arrow function


    var isEven = (element) => {
        return element % 2 === 0; 
         }
        //  console.log(isEven(2));

        // callback

        // let result = [2,12,4,6,8].every(isEven);
        // console.log(result);


        let result = [2,12,4,6,8].every(isEven);
        console.log(result);

        let result = [2,3,4,6,8].every((e)) => (e % 2 ===2);
        console.log(result);