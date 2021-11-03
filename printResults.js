const chalk = require("chalk");
const sumeFunction = require("./sumeFunction");
const differenceFunction = require("./differenceFunction");
const multiplicationFunction = require("./multiplicationFunction");
const divisionFunction = require("./divisionFunction");

const printResults = (a, b) => {
  const resultSume = chalk.bgBlue(sumeFunction(a, b));
  const resultDifference = chalk.bgBlue(differenceFunction(a, b));
  const resultMultiplication = chalk.bgBlue(multiplicationFunction(a, b));
  const resultDivision = chalk.bgBlue(divisionFunction(a, b));

  console.log(
    chalk.yellow(`
      Resultados : \n
      ${a} + ${b} : ${resultSume}
      \n
      ${a} - ${b} : ${resultDifference}
      \n
      ${a} * ${b} : ${resultMultiplication}
      \n
      ${a} / ${b} : ${resultDivision}
    `)
  );
};

module.exports = printResults;
