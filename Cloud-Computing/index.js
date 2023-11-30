// index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes_user = require('./routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes_user);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
