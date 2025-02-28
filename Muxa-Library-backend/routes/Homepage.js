const express = require('express');
const router = express.Router();
const Book = require('../models/Book')


router.route('/').get(async (req, res) => {
    const Books = await Book.find()
    console.log(Books)
    // Books.forEach((book) => {
    //     console.log(book.Title);
    // })
    return res.json(Books
        // [{
        //     Title: "classroom of elites",
        //     Author: "japan",
             
        // },
        // {
        //     Title:"solo leveling",
        //     Author: " korean",
             
        // },
        // {
        //     Title:"god of highschool",
        //     Author:"china",
             
        // },
        // {
        //     Title: "rick and morty",
        //     Author: " america",
             
        // },
        // {
        //     Title: "record of ragnarok",
        //     Author: "japan",
             
        // }]
)
})
module.exports = router;