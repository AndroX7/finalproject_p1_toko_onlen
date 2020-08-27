const express = require('express')
const router = express.Router()

const Controller = require('../controllers')

router.get('/checkOut/:id',Controller.getCheckoutHandler)
// router.get('/buy/:id',Controller.getBuyHandler)
// router.post('/buy/:id',Controller.postBuyHandler)
router.get('/orderList',Controller.getOrderListHandler)
router.get('/cancelOrder/:id',Controller.getCancelOrder)
router.get('/categories/:category',Controller.getSelectByCategory)

module.exports = router
