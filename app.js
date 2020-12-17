const express = require('express');
const app = express();

const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

let test = '';

client.connect(err => {
  if (err) {
    test = 'connection error';
  } else {
    test = 'connected'
  }
})

app.get('/', (req, res) => {
  res.send(`${test}`);
  console.log('GET ', '/')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("WAZZZAP");
});
