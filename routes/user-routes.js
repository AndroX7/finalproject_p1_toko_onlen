const express = require('express')
const router = express.Router()

const Controller = require('../controllers/index.js')

router.get('/login',Controller.getLogin)
router.post('/login',Controller.postLogin)
router.post('logout',Controller.getLogout)
router.get('/register',Controller.getRegisterUser)
router.post('/register',Controller.postRegisterUser)
router.get('/userUpdate/:id',Controller.getUpdateUser)
router.post('/userUpdate/:id',Controller.postUpdateUser)
module.exports = router
