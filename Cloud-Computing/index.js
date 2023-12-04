// index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes_user = require('./routes');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'doc')));
app.use('/api', routes_user);

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
