const express = require('express')
const router = express.Router();
const connection = require('../DB/database')

router.get("/user", async (req, res) => {


  connection.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.send({ status: "ok", data: result });
  });
})



// add new customer 
function generateAccountNumber() {
  return Math.floor(100000000 + Math.random() * 900000000); // Generate a 6-digit random number
}

router.post('/register', (req, res) => {

  const { name, balance } = req.body;

  function addCustomer(name, balance) {
    const myaccount = generateAccountNumber();
    const checkExistenceQuery = `SELECT * FROM users WHERE myaccount = ${myaccount}`;
    connection.query(checkExistenceQuery, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      if (result.length === 0) {
        // Account number is unique, insert the new customer
        const insertQuery = `INSERT INTO users (id, name, myaccount, balance) VALUES ('${myaccount}','${name}', ${myaccount}, ${balance})`;
        connection.query(insertQuery, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to register" });
          }
          res.status(201).json({ message: "Inserted successfully" });
        });
      } else {
        // Retry if account number already exists
        addCustomer(name, balance);
      }
    });
  }
  addCustomer(name, balance);

});

// })



router.post('/transfer', async (req, res) => {
  const { myaccount, receiveraccount, amount } = req.body;

  const senderQuery = `SELECT * FROM users WHERE myaccount = ${myaccount}`;
  const receiverQuery = `SELECT * FROM users WHERE myaccount = ${receiveraccount}`;

  connection.query(senderQuery, async (err, sender) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (sender.length === 0) {
      return res.status(200).json(2); // Sender not found
    }

    connection.query(receiverQuery, async (err, receiver) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (receiver.length === 0) {
        return res.status(200).json(1); // Receiver not found
      }

      if (sender[0].balance < amount) {
        return res.status(200).json(0); // Insufficient balance
      }

      const senderBalance = sender[0].balance - amount;
      let num1 = Number(receiver[0].balance);
      let num2 = Number(amount);
      const receiverBalance = num1 + num2;
      console.log(senderBalance);
      console.log(receiverBalance);
      const senderUpdateQuery = `UPDATE users SET balance = ${senderBalance} WHERE myaccount = ${myaccount}`;
      const receiverUpdateQuery = `UPDATE users SET balance = ${receiverBalance} WHERE myaccount = ${receiveraccount}`;

      connection.query(senderUpdateQuery, async (err, result1) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        connection.query(receiverUpdateQuery, async (err, result2) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
          }
          res.status(200).json({ message: "Transfer successful" });
        });
      });
    });
  });
});





module.exports = router;