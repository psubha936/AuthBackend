const express = require('express');
const router = express.Router();
const RegisterController = require('../Controller/UserRegister.controller')


router.get('/',RegisterController.getRegisterData)
router.post('/',RegisterController.PostRegisterData)
router.get('/user/:id',RegisterController.getSingleRegisterData)
router.patch('/user/:id',RegisterController.editSingleRegisterData)
router.delete('/user/:id',RegisterController.deleteSingleRegisterData)


module.exports = router