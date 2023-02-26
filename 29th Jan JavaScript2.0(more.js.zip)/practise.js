// spread and rest ... both are denoted by 3 dots
// spread = spreading the data then sending it.
// rest = accumulating the data when data is coming 

function sumone(x, y) {
    return x + y;
}

let arr1 = [7,7];
let arr2 = [9,152];
let arr3 = [19,152];
// let zebra = sumone(...arr2);
//console.log(zebra);//
// console.log(sumone(...arr3));
// let raman = sumone(2,3);
// console.log(raman);
// console.log(sumone);

// i want to pass the data from arr1 to function, we need spread for this.
// we r printing the function  and passing the arr1 data through spread.
//if array is big function can take only 2 as , it has values in parameter only 2.

//console.log(sumone(...arr1));//spread 

function john(...arr1) {
    // console.log(...arr1);
    // console.log(arr1);
        let john = 2;
    for (const n of arr1) {
        // console.log(arr1);
        john = john + n;
        
    }
    
    return john;
    
}
// console.log(john);
let hen = john(1,2,3,4,5,6,7,8,9,0);
console.log(hen);
// console.log(john);


