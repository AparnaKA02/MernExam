const express = require('express')
 const userController = require('../controller/userController')
const router = new express.Router()

// register : http://localhost:3000/register

router.post('/register',userController.registerController)


module.exports = router