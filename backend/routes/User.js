const router = require('express').Router()
const formidable = require('express-formidable')
const { createUser, login, getAllUsers, getUser } = require('../controllers/User')
const {isAuthenticated } = require('../middleware/auth')


    router.post('/crate-user',formidable(),createUser)
    router.post('/login',login)
    router.get('/users',isAuthenticated,getAllUsers)
    router.get('/me',isAuthenticated,getUser)
   
module.exports = router