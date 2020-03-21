var express = require('express');
var os = require("os");
var app = express();
var porta = process.env.PORT || 8080;
var hostname = os.hostname();

app.get('/', function (req, res) {
  res.send('Hello World - by NodeJS!\nHostname: '+hostname);
});

app.listen(porta, function () {
  console.log('Exemplo API nodejs executando na porta '+porta+'!');
});
