require("dotenv").config();
const http = require("http");
const printResults = require("./printResults");

const server = http.createServer();

const port = process.env.SERVER_CHALLENGE || 5000;

server.listen(port);

server.on("request", (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.end(printResults(1, 2));
});

const numbers = process.argv.slice(2).map((num) => parseInt(num, 10));

const calculator = (a, b) => {
  if (!a && !b) {
    console.log("");
  } else if (!a || !b) {
    process.exit(0);
  } else {
    printResults(a, b);
  }
};

// calculator(numbers[0], numbers[1]);
