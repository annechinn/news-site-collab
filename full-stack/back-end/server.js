const express = require('express');
const connectDB = require('./db.js');
const { port } = require('./config');

const app = express();

connectDB();

app.put('/api', (req, res)=> {
  res.send('Hello World!');
});

app.listen(port, ()=> {
  console.log(`Server started on port ${port}`);
});
