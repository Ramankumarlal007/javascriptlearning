// function getfastlaptopI(laptop1, laptop2)   here we need to passs the parameteer in 
// getfast laptop and we need to call this parameter to get the value.  
// normally when we comparewe need to pass the parameters.


// // function getfastlaptopI(lap, asus) {                        
// //   if(laptop1.cpu > laptop2.cpu) {
// //     console.log(laptop1);
// // }else {
// //     console.log(laptop2);
// // }
// }
let laptop2 = {
    cpu: "i7",
    ram: 16,
    brand: "apple mac pbook pro",
  
    greet: function () {
      console.log(this.cpu);
    }
  };

let laptop1 = {
  cpu: "i3",
  ram: 16,
  brand: "Dell vostro",

    compare: function(other) {
      if(this.cpu > other.cpu) {
        console.log(this);
    }else {
        console.log("John ceena", other, this);
    }
    },

  greet: function () {
    console.log(this.cpu);
  }
};
laptop1.compare(laptop2)

// result
// {
//   cpu: 'i7',
//   ram: 16,
//   brand: 'apple mac pbook pro',
//   greet: [Function: greet]
// }

// laptop4.greet(); i4
// laptop3.greet();  i3
// if(laptop1.cpu > laptop2.cpu) {
//     console.log(laptop1);
// }else {
//     console.log(laptop2);
// }
// passing 2 objects here to get the comparison. 3rd person is comparing here.
// getfastlaptopI(laptop1, laptop2);
// Answer
// {
//   cpu: 'i7',
//   ram: 16,
//   brand: 'apple mac pbook pro',
//   greet: [Function: greet]
// }

// how the laptop itself compares, should print the result. one object is comparing itself twith the other object.
//  u r calling this compare method with help of laptop1 and by calling the laptop1 is alreadt there for being compared to laptop2 above
// evertime an object when executing a method it is there. it is ther but it is like hidden/invisible.
// how can be use that hidden object if we can't see it hidden?
// so to do that we use "this"

// compare: function(other) {
//   if(this.cpu > other.cpu) {
//     console.log(this);
// }else {
//     console.log(other);
// }
// }
// laptop1.compare(laptop2)