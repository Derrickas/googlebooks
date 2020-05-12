const express = require('express')
var router = express.Router()
var bookcontroller = require('../../controller/bookcontroller')

router.route('/').get(bookcontroller.findAll)



    module.exports = router