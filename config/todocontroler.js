const todoModel = require("../models/Todo");

class todocontroler {
  async getTodo(req,res){
   let result = await todoModel.find({})
   console.log('result', result)
   res.render('todo',{data:result})
  }
  async addTodo(req,res){

  }
  async deleteTodo(req,res){

  }

}

module.exports = todocontroler