// litteral objects
// Object is a fundamental data type that is used to collection of key value pairs{}
const UsersData = {
  name: "aadil",
  email: "aadil@gmail.com",
  age: "20",
  location: "indore , India",
  isLoggedIn: false,
};

UsersData.email = "aadilkhan@gmail.com";
console.log(UsersData);
console.log(UsersData.email)
console.log(UsersData["name"]); // right way to clg to the objects
