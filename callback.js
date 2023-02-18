function isEven(element){
    if (element % 2 ===0) {
        return true;
      
    }
    return false;  
    // undefined when commented out 
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


        // let result = [2,12,4,6,8].every(isEven);
        // console.log(result);

        // let result = [2,3,4,6,8].every((e)) => (e % 2 ===2);
        // console.log(result);


        // let result = [2,11,4,6,8].every(isEven)
        // console.log(result);

        //  we use arrow function for call back; 
        // how to write a call back . a simple fun which doesn't hv a name.
        // remember this () => {}
        // in mainy cases we will t be using return keyword, 
        // so when return keyword is not used then {} also should be removed
        // let result = [2,4,36,8].every((e) => {
        //     return e % 2 === 0
        // });
        // console.log(result);

        // let result1 = [2,43,36,8].every((e) => e % 2 === 0);
        // console.log(result1);

        let result2 = [2,44,36,82].every((e) => (e % 2 === 0));
        console.log(result2);


