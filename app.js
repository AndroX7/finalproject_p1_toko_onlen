const express = require('express')
const port = 3005
const app = express()

const router = require('./routes')

app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended : true}))

app.get('/product/',(req,res) =>{
  res.render('search/')
})
app.use('/',router)

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})
