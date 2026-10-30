import {users} from "./data.js";
function addUser(arr, name, lastname, age, job, email, password) {
  let newUser = {
    id:
    name,
    lastname,
    age,
    job,
    email,
    password,
  };

  return newUser;
}

console.log(
  addUser(
    users,
    "john doe",
    "macgregor",
    34,
    "boxer",
    "johndoe@gmail.com",
    "1234",
  ),
);