const router = require('express').Router()
const controller = require('../controllers/user.controller')
const authorization = require('../middleware/authorization')

// REGISTER ROUTE
router.post('/register', controller.user_register)

// LOGIN ROUTE
router.post('/login', controller.user_login)

//USER TOKEN ROUTE
router.get('/verify-token', authorization, controller.user_token_verify)
module.exports = router
