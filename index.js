const lib = require("./lib.js");
const express = require("express");

const server = express();
server.listen(8080);

const fs = require("fs");
const text = fs.readFileSync("demo.txt", "utf-8");
fs.readFile("demo.txt", "utf-8", (eror, text) => {
  console.log(text);
});
console.log(text);

console.log(lib.sum(3, 5), lib.diff(5, 6));

console.log("hello world pavan");
