const mongoose=require("mongoose");

const passbookSchema = new mongoose.Schema({
    customerName: {
      type: String,
      required: true
    },
    accountNumber: {
      type: Number,
      required: true
    },
    transactions: {
      type: Array,
      required: true
    }
  });
  
  const Passbook = mongoose.model('Passbook', passbookSchema);
  module.exports=Passbook;