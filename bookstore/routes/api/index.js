const express = require('express')
var router = express.Router()
var booksroute = require('./books')
var googleroutes = require('./google')



router.use('/books', booksroute)

router.use('/google', googleroutes)



    module.exports = router