const name = "uzair";
const age = 2;

console.log(`my name is ${name} and my age is ${age}`);

const gameName = new String("Aadil");
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.charAt(2));
console.log(gameName.indexOf("l"));

const newString = gameName.substring(0, 5);
console.log(newString);

const data = [
  {
    name: "aadil",
    age: 20,
    email: "aadil@gmail.com",
    id: 1,
  },
  {
    name: "adil",
    age: 20,
    email: "aadil@gmail.com",
    id: 2,
  },
  {
    name: "aadl",
    age: 20,
    email: "aadil@gmail.com",
    id: 3,
  },
];

console.log(data);