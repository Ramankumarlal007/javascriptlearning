let map = new Map();
map.set("Raman", "java");
map.set("navin ", "js");
map.set("Rishabh yadav", "python");
map.set("Rishabh yadav", "blockchain");
// console.log(map.values());

// console.log(map.has('chirag'));
// console.log(map.has('Raman'));

// console.log(map.get('Raman'));

// for(let [k,v] of map) {
//     console.log(k, ":",  v);
// }

// foreach loop
map.forEach((v,k) => 
{
    console.log(k, ":", v);
})