const marvel = ["thoson", "darker", "man"];
const DC_marvel = ["hero", "villain", "men"];

marvel.push(DC_marvel);
console.log(marvel);

// array merge karna or concat karna ek hi h or spread operator bhi
const allHeros = marvel.concat(DC_marvel)
console.log(allHeros)

const all_new_heros  = [...DC_marvel , ...marvel]
console.log(all_new_heros)

console.log(Array.isArray("Aadil"));
console.log(Array.from("Aadil"));

const arr = ["name", 123, false, { name: "aadil" }, ["array"], null];
console.log(typeof arr);
