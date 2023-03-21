const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    myaccount:{
        type:Number,
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
    debit:{
        type:String,
    },
    credit:{
        type:String,
    }
   
})

const User=mongoose.model('USERDATA',userSchema);

module.exports=User;