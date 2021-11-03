const sumeFunction = require("./sumeFunction");
const differenceFunction = require("./differenceFunction");
const multiplicationFunction = require("./multiplicationFunction");
const divisionFunction = require("./divisionFunction");

const printResults = (a, b) => {
  const resultSume = sumeFunction(a, b);
  const resultDifference = differenceFunction(a, b);
  const resultMultiplication = multiplicationFunction(a, b);
  const resultDivision = divisionFunction(a, b);

  return `<div>
  <h1>Resultados :</h1>  
      <p>${a} + ${b} : ${resultSume}</p>
      
      <p>${a} - ${b} : ${resultDifference}</p>
      
      <p>${a} * ${b} : ${resultMultiplication}</p>
      
      <p>${a} / ${b} : ${resultDivision}</p>
      </div>
    `;
};

module.exports = printResults;
