console.log("sing.js loaded");
var beers = prompt("How many versus would you like to sing?");
while (beers > 0) {
  console.log(beers + " bottles of beer on the wall,");
  console.log(beers + " bottles of beer!");
  console.log("Take one down and pass it around,");
  beers--;
  console.log(beers + " bottles of beer on the wall!");
}
