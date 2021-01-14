const express = require('express');
const todoRouter = express.Router();

todoRouter.get('/todo',(req,res)=>{
  console.log(req.body)
  res.render('todo',{
    data:req.body
  })
})


module.exports = todoRouter