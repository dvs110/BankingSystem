
const connection = require('./DB/database')
const userSchema = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  myaccount INT NOT NULL,
  balance FLOAT NOT NULL,
  UNIQUE (myaccount)
);
`;

connection.query(userSchema, (err, result) => {
  if (err) throw err;
  console.log("Users table created or already exists.");
});