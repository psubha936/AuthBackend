const express = require('express')
const router = express.Router()
const loginController = require('../Controller/login.controller')

router.get('/',loginController.getSignupData)
router.post('/',loginController.CheckSignupData)

module.exports = router