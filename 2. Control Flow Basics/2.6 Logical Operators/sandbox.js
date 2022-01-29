// logical operators

const password = "p@ss";
if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty strong");
} else if (password.length >= 8 || password.includes("@") && password.length > 5) {
  console.log("that password is strong");
} else {
  console.log("password is too short");
}