// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// get the arguments
const args = process.argv.slice(2);
console.log("args:", args);

// Edge case: We need at least 2 arguments.


// create an accumulator for the sum
let total = 0;

// iterate throught the commande line args
// for of, for let, forEach

for (let arg of args) {
  total += Number(arg);
  console.log("arg:", Number(arg), "total:", total);
}

// input validation
// Edge case: If any argument is not a whole number, skip it.
// Edge case: If any argument is not a number, output an error message. 

// Add each argument

// print the sum
console.log("Total:", total)