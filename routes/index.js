const express = require('express')
const router = express.Router()

// const homeRoutes = require('./home-routes.js')
// const userRoutes = require('./user-routes.js')
const featuresRoutes = require('./features-routes.js')

// router.use('/',homeRoutes)
router.use('/features',featuresRoutes)
// router.use('/user',userRoutes)

module.exports = router
