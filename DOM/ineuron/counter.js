// function Rishabh (){
//     console.log(`I was called by a function`);
// }

// function binay(){
//     Rishabh();
// }
// binay()whwn a function calls another function it is called as calllback or HOF
//  Rishabh()

 //mini program
//  const callback = (n) => {
//     return n ** 2;
//  };

//  let kite = callback(5);
//  console.log(kite);

//  function cube(callback) {
//     return callback(n) * n;
//  }
// console.log((cube(n)));

setTimeout(() => {
   console.log(`Rishabh is a good little boy`);
}, 5000);

function jack (n) {
   console.log(`Sukanya is a good little girl ${n} `);
}


setTimeout(jack, 3000)

// setInterval something which happens contantly after certain interval
setInterval(() => {
   console.log("rishabh 007");
}, 2000);
