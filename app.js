const express = require('express')
const port = 3003
const app = express()

app.get('/product/',(req,res) =>{
  res.render('search/')
})
app.get('/',(req,res)=>{
  console.log(JSON.stringify(req.query))
  res.send(req.query)
})

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})
