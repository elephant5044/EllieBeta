
const express = require('express');
const app = express();
const db = require("quick.db");
const fs = require('fs')

app.use(express.static('public'));

app.get('/tags', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/api/inventory', function(request, response) {
  if (!request.query.user) return response.send("That user doesn't exist.")
  response.sendFile(__dirname + '/views/inventory.html');
});


const listener = app.listen(80, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
