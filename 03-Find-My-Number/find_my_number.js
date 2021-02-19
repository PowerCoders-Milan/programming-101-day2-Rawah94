//insert your pseudocode below
/*

input = output

input (1-100)

process of elmination 

is it equal or more than 50

is it equal or more than 75

is it equal or more than 85

is it equal or more than 95

loop repreat prompt

if equal solved
if higher try again
if lower try again

*/

//insert your code below
var number;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


number = Number(window.prompt('Pick a number between 1-100'));
if (mathRandomInt(1, 100) <= 50) {
  while (!true) {
    window.alert(number);
  }
