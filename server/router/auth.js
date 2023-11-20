const express=require('express')
const router=express.Router();
require('../DB/conn')
const User=require('../models/userSchema')
router.get("/user",async(req,res)=>{
  try{
    const allData=await User.find({});
    res.send({status:"ok",data:allData});
  }
  catch(error){
      console.log(error)
  }
})



// add new customer 

router.post('/register',(req,res)=>{
    const {name,myaccount, balance}=req.body
     if(!name|| !myaccount || !balance)
     {
        return res.status(422).json({error:"fill all field"})
     }

     User.findOne({myaccount:myaccount})
     .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Already exist"}) 
        }

        const user=new User({name,myaccount, balance})
        user.save().then(()=>{
            res.status(201).json({message:"Inserted successfully"})
        })
        .catch((err)=>res.status(500).json({error:"Failed to register"}))
     }).catch(err=>{ console.log(err)})

    console.log(name)
    console.log(balance)
    // res.json({message:req.body}) 

})



// transfer money

router.post('/transfer', async (req, res) => {
  const { name, myaccount, receiveraccount, amount } = req.body;
  console.log(myaccount);
  try {
    // Find the sender and check if they have enough balance
    const sender = await User.findOne({ myaccount: myaccount });
    console.log(sender);
    const receiver = await User.findOne({ myaccount: receiveraccount });
    console.log(receiver);
   
    if (!sender) {
      res.status(200).json(2);
    } 

   else if (!receiver) {
      res.status(200).json(1);
    }
    
   else if (sender.balance < amount) {
      res.status(200).json(0);
    }

    // Find the receiver
    if (sender && receiver && sender.balance >= amount) {
      // Update the balance of the sender and receiver
      const senderUpdated = await User.findOneAndUpdate({ myaccount: myaccount }, { $inc: { balance: -amount } }, { new: true });
      console.log(senderUpdated)
      const receiverUpdated = await User.findOneAndUpdate({ myaccount: receiveraccount }, { $inc: { balance: amount } }, { new: true });
      console.log(receiverUpdated)

      res.status(200).json({ sender: senderUpdated, receiver: receiverUpdated });
    }
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }

});



  
module.exports = router;
