const { User,Cart,Item } = require('../models')
const { Op } = require("sequelize");

class Controller{
  static getHomeHandler(req,res){
    Item.findAll({})
    .then(data =>{
      res.render('home',{title:"Shopiii Online Shop", data })
    })
  }
  static getRegisterUser(req,res){
    res.render("register-user",{title:"Register User"})
  }
  static postRegisterUser(req,res){
    let userInput = req.body
    userInput = userInput.map((el) =>{
      el.createdAt = new Date()
      el.updatedAt = newDate()
    })
    User.create(userInput)
    .then(data =>{
      res.redirect('login')
    })
    .catch((err) =>{
      res.send(err)
    })
  }
  static buyItem(req,res){

  }
  static getOrderListHandler(req,res){
    // res.send('hai hai')
    Cart.findAll({
      where:{
        UserId: 1,
        status_order: 'Confirmed'
      },
      include:Item
    }).then((data) =>{
      res.send(data)
    })
    .catch((err) =>[
      res.send('err : ' + err)
    ])
  }
}

module.exports = Controller
