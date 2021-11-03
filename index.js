require("dotenv").config();

const printResults = require("./printResults");

const numbers = process.argv.slice(2).map((num) => parseInt(num, 10));

const calculator = (a, b) => {
  if (!a && !b) {
    console.log("asdg");
  } else if (!a || !b) {
    process.exit(0);
  } else {
    printResults(a, b);
  }
};

calculator(numbers[0], numbers[1]);
