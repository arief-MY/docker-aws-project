const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'rootpassword',
  database: 'myapp'
});

db.connect(err => {
  if(err) console.log('DB connection error', err);
  else console.log('DB connected');
});

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.listen(port, () => console.log(`Backend running on port ${port}`));