console.log("login.js loaded");
var userLogin = {
  name : 'testy' ,
  pass : 'testy1'
};
var tries = 3;
while (tries > 0) {
  var passAttempt = prompt("Enter password for " + userLogin['name']);
  if (passAttempt !== userLogin['pass']) {
    tries--;
  } else {
    console.log("in else");
  // if (passAttempt === userLogin['pass']) {
    alert("Password match great success. Enter the forbidden unknown...");
    tries = 0;
  }
}
