var express = require('express');
var app = express();
var porta = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World - by NodeJS!');
});

app.listen(porta, function () {
  console.log('Exemplo API nodejs executando na porta '+porta+'!');
});
