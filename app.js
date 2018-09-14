const express = require('express');
const resposeApi = require('./api/fields.json');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.get('/api/fields.json', (req, res) => {
  res.json(resposeApi);
})

app.listen(3000, () => {
  console.log('App listening on port 3000');
});