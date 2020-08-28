const { User,Cart,Item } = require('../models')
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs')
const saltRounds = 10

class Controller{

  static getLogin(req,res){
    res.render('login',{title:"Login"})
  }

  static getLogout(req,res){
    req.session.destroy(err=>{
            if(err){
                res.send(err)
            }

            res.redirect('/')
      })
  }
  static postLogin(req,res){
    User.findOne({
      where:{
        username: req.body.username
      }
    }).then(data =>{
      if(data == null){
        res.redirect('/user/login')
      }
      else{
        bcrypt.compare(req.body.user_password,data.user_password)
        .then(result =>{
          if(result == false){
            res.redirect('/user/login')
          }
          else{
            Item.findAll({})
            .then(data =>{
              // let id = req.session.id
              req.session.user_id = data.id
              req.isLogin = true
              console.log(result.id)
              res.render('home',{title:"Welcome to Shopiii", data, user_id: req.session.user_id ,isLogin:req.session.isLogin})
            })
          }
        })
      }
    })
    .catch((err) =>{
      res.send(err)
    })
  }
  static getHomeHandler(req,res){
    Item.findAll({})
    .then(data =>{
      res.render('home',{title:"Shopiii Online Shop", data})
    })
  }
  static getUpdateUser(req,res){
    User.findOne({
      where:{
        id:req.session.id
      }
    })
    .then(data =>{
      res.render('edit-info',{title:"Edit Profile", data })
    })
    .catch((err) =>{
      res.send(err)
    })
  }
  //res.send('error : ' + err)
  static postUpdateUser(req,res){
    let updateInfo = req.body
    updateInfo.updatedAt = new Date()
    User.update({
      username: updateInfo.username,
      user_password: updateInfo.user_password,
      email: updatedInfo.email,
      user_nickname: updateInfo.user_nickname,
      user_address: updateInfo.user_address,
      phone_number: updateInfo.phone_number
    },{
      where:{
        id: req.session.id
      }
    })
    .then(data =>{
      res.redirect('')
    })
    .catch((err) =>{
      res.send(err)
    })
  }
  static getRegisterUser(req,res){
    res.render("register-user",{title:"Register User"})
  }
  static postRegisterUser(req,res){
    let inputUser = req.body
    inputUser.createdAt = new Date()
    inputUser.updatedAt = new Date()
    bcrypt.hash(inputUser.user_password,saltRounds,(err,result)=>{
      if(err){
          res.send('err : ' + err)
      }
      else{

        inputUser.user_password = result
        console.log(result);
        User.create(inputUser)
        .then(()=>{
        res.redirect('/user/login')
        })
        .catch((err) =>{
            res.send(err)
          })
        }
      })
  }
  static getSelectByCategory(req,res){
    Item.findAll({
      where:{
        item_category: req.params.item_category
      }
    })
    .then(data =>{
      res.render('show-categories', { title: `Item List` , data})
    })
    .catch((err) =>{
      res.send(err)
    })
  }
  static getCheckoutHandler(req,res){
    Cart.findAll({
      where:{
        id:req.params.id
      },
      include:Item
    }).then(data =>{
      data.status_order = 'true'
      return Cart.update({status_order: data.status_order},{
        where:{
          id:req.params.id
        }
      })
    })
    .then( data => {
      res.redirect('orderList',{title: "History Order", data })
    })
    .catch((err) =>{
      res.send(err)
    })
  }
  static getCancelOrder(req,res){
    Cart.destroy({
      where:{
        id:req.params.id
      }
    })
    .then(data =>{
      res.redirect('') // balik ke halaman order list
    })
    .catch((err) =>{
      res.send(err)
    })
  }
  static buyItem(req,res){
    Item.findOne({
      where:{
        id:req.body.id
      }
    }).then(data =>{
      let addCart = {
        status_order:'Pending',
        UserId:req.session.id,
        ItemId: req.body.id,
        qty: req.body.qty,
        total_price: (Number(data.price) * Number(req.body.qty)),
        address: req.body.address,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      return Cart.create(addCart)
    })
    .then(data =>{
      res.redirect('') // balik ke list order
    })
    .catch((err) =>{
      res.send(err)
    })
  }
  static getOrderListHandler(req,res){
    // res.send('hai hai')
    Cart.findAll({
      where:{
        UserId: 12,
        status_order: 'Confirmed'
      },
      include:Item
    }).then((data) =>{
      res.send(data)
    })
    .catch((err) =>{
      res.send('err : ' + err)
    })
  }
}

module.exports = Controller
