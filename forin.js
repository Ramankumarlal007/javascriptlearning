const names = ["youtube", "facebook", "Instagram", "Netflix", "Amazon"];
// console.log(names[4]);
// forof is for Array
// for (const rishabh of names){
//     console.log(rishabh);
// }

// forIn is for Object
const symbols = {
    yt : "Youtube",
    fb : "facebook",
    AN : "Amazon",
    LCO : "learncodeonline.in",
    };
// for (const Raman in symbols){
// console.log(Raman);
// }
// for (const jack in symbols){
//     console.log(symbols[jack]);
// }
// for (let ritu in symbols){
//     console.log(`key is:${ritu} and value is ${symbols}`);
// }
for (let ritu in symbols){
    console.log(`key is:${ritu} and value is ${symbols[ritu]}`);
}
