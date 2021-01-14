const mongoose = require('mongoose');

const PeageSchema = new mongoose.Schema({
  text:{
    type:String
  },
  date:{
    type:Date,
    default:Date.now 
  }
})

const todoModel = mongoose.model("Todo",PeageSchema)

module.exports = todoModel