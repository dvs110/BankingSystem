const mysql = require("mysql");
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.USER_DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as ID: ' + connection.threadId);
});
module.exports = connection;