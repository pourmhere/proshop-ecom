import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mustafa",
    email: "mustafa@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
