const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmodel = new Schema({
      title: {
        type: String,
        trim: true,
        required: "String is Required"
      },
    
      author: {
        type: String,
        required: true
      },
    
      description: {
        type: String,
        required: true
      },
    
      image: {
        type: String,
        required: true
       
      },
      link: {
        type: String,
        required: true
      },
});

const book = mongoose.model("book", bookmodel);

module.exports = book;