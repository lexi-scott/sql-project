const express = require('express');
const db = require("./db/connection");
const openPrompt = ("./functions");
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const dbConnect = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'employeeManager_db'
  },
  console.log(`Connected to the courses_db database.`)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
