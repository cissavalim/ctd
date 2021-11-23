const express = require("express");
const app = express();
const soma = require("./aula14");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);

console.log(soma(1, 2));
