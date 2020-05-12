const express = require('express')
var router = express.Router()
var googlecontroller = require('../../controller/googlecontroller')

router.route('/').get(googlecontroller.findAll)




    module.exports = router