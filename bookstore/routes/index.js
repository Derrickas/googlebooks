const express = require('express')
var router = express.Router()
var apiroutes = require('./api')


router.use('/api', apiroutes)



    module.exports = router