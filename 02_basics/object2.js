// const tinnderUser = new Object()

const tinnderUser = {};

tinnderUser.id = "123abc";
tinnderUser.name = "name";
tinnderUser.email = "user@gmail.com";

console.log(Object.keys(tinnderUser));
console.log(Object.values(tinnderUser));

const regularUser = {
  email: "name@gmail.com",
  fullName: {
    userfullName: {
      firstName: "Aadil",
      lastName: "khan",
    },
  },
};

// console.log(regularUser.fullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    name: "aadil",
  },
  {
    id: 1,
    name: "aadil",
  },
  {
    id: 1,
    name: "aadil",
  },
];

// console.log(users[1]);
