const express = require('express')
const port = 3005
const app = express()
const session = require('express-session')
const router = require('./routes')

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended : true}))

app.use(session({
  secret: "aLongNightWith^#%^",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000
  }
}))


app.get('/product/',(req,res) =>{
  res.render('search/')
})
app.use('/',router)

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})
