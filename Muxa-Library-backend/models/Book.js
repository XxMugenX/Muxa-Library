const mongoose = require('mongoose');

const schema = mongoose.Schema;

const BookSchema = new schema({
    Title: {
        type: string,
        required: true
    },
    Description: {
        type: string,
        required: true
    },
    Author: {
        type: string,
        required: true
    },
    Book: {
        type: File,
        required: true
    }
},
    { collection: " Books " });
const Book = mongoose.model("Book", BookSchema);
 
module.export = Book;