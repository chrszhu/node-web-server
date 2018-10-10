const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send({
    errorMessage: 'unable to handle request',
    hello: ['wtf', 'wtfs']

  })
});

app.get('/about', (req, res) => {
  res.send('About page');
});


app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'unable to handle request'
  })
});
app.listen(3000);
