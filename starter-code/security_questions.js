console.log("security_questions.js loaded");

var securityQuestions = [
  {question: "What was your first pet's name?", expectedAnswer: "FlufferNutter"} ,
  {question: "Where did you grow up?", expectedAnswer: "Russia"} ,
  {question: "How old are you?", expectedAnswer: "28"} ,
  {question: "What is your name?", expectedAnswer: "Anton"}
] ;

for (var i = 0; i < securityQuestions.length; i++) {
  var currentQuestion = securityQuestions[i];
  var answer = prompt(currentQuestion['question']);
  if (answer === currentQuestion['expectedAnswer']) {
    continue;
  } else {
    alert("NOOOOOO INTRUDER ALERT!!!!!!!");
    break;
  }
}
