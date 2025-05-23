let x;
console.log(x);

const value = "name";
console.log(typeof value);

// Why string to number conversion is confusing

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(2 + 2);
console.log(1 + 2 + "2");

console.log("1" + "1");

function example() {
  if (true) {
    var y = 20;
  }
  console.log(y);
}
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}

let a = ["str", 4];
console.log(a);

const myArray = [
  "hello", // string
  42, // number
  true, // boolean
  { name: "Ali" }, // object
  [1, 2, 3], // array
  function () {
    return "Hi";
  }, // function
];

console.log(myArray[5]);
