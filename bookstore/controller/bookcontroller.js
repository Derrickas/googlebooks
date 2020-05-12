var bookmodel = require('../models/bookmodel')


module.exports = {
    findAll: function () {
        bookmodel.find().then(function (books) {
            res.json(books)
        })
    },
    
}