const express = require('express')
const router = express.Router()

const Controller = require('../controllers/index.js)

router.get('/',Controller.homeHandler)

module.exports = router
