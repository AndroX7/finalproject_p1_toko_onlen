const express = require('express')
const router = express.Router()

const Controller = require('../controllers/index.js')

router.get('/register',Controller.getRegisterUser)
router.post('/register',Controller.postRegisterUser)
// router.get('/userUpdate/:id',Controller.getUpdateUser)
// router.post('/userUpdate/:id',Controller.postUpdateUser)
router

module.exports = router
