const express = require('express');
const app = express();

app.put('/api', (req, res)=> {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, ()=> {
  console.log(`Server started on port ${port}`);
});
