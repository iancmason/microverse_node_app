var express = require('express')
var app = express()

app.get('/ian', function (req, res) {
  res.send('Hello World!')
})

// POST method route
app.post('/', function (req, res) {
  res.send('this is a post message!!!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
