const mongoose = require('mongoose');

const schema = mongoose.Schema;

const BookSchema = new schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Book: {
        type: Buffer,
        
    }
},
    { collection: " Books " });
const Book= mongoose.model("Book", BookSchema);
 
module.exports = Book