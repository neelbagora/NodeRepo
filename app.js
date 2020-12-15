const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the home page baby');
  console.log('GET ', '/')
});

app.listen(3000, () => {
  console.log("WAZZZAP");
});
