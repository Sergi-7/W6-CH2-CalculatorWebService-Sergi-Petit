require("dotenv").config();
const http = require("http");
const url = require("url");
const sumeFunction = require("./sumeFunction");
const differenceFunction = require("./differenceFunction");
const multiplicationFunction = require("./multiplicationFunction");
const divisionFunction = require("./divisionFunction");

const server = http.createServer();

const port = process.env.SERVER_CHALLENGE || 5000;

server.listen(port);

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

server.on("request", (request, response) => {
  response.statusCode = 200;
  const { a, b } = url.parse(request.url, true).query;
  const path = url.parse(request.url, true).pathname;
  response.setHeader("Content-Type", "text/html");

  const numberA = +a;
  const numberB = +b;

  if (path === "/calculator") {
    if (!Number.isNaN(numberA) && !Number.isNaN(numberB)) {
      response.statusCode = 200;
      response.write(printResults(numberA, numberB));
      response.end();
    } else if (!numberA || !numberB) {
      server.close();
      response.write(
        `<h1>Bad request - You should introduce a valid number</h1>`
      );
      response.statusCode = 400;
      response.end();
    }
  } else {
    response.write(`<h1>404 - Page not found</h1>`);
    response.statusCode = 404;
    response.end();
  }
});
