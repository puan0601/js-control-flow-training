console.log("login.js loaded");
var userLogin = {
  name : 'testy' ,
  pass : 'testy1'
};
var passAttempt = prompt("Enter password for " + userLogin['name']);
var tries = 2;
while (tries > 0) {
  if (passAttempt !== userLogin['pass']) {
    passAttempt = prompt("Try again, you have " + tries + " tries remaining");
    tries--;
  }
  if (passAttempt === userLogin['pass']) {
    alert("Password match great success. Enter the forbidden unknown...");
    break;
  }
}
