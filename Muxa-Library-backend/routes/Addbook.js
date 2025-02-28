const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
 const Books = require('../models/Book')


router.route('/').post( upload.single('file'),async (req, res, next) => {
    console.log(req.file);
    console.log(req.body);

    //handle file type mismatch
    if (typeof req.file == 'undefined') {
        return res.json({
            status: "Unsuccessful",
            ErrorMessage: "Please select a file before uploading"
        })
    }
    if (req.file.mimetype != 'application/pdf') {
        return res.json({
            status: "Unsuccessful",
            ErrorMessage : "Unsupported upload, please upload a pdf file"
        })
    }

    try {
        const NewBook = await Books.create({
            Title: req.body.title,
            Description: req.body.description,
            Author: req.body.author,
            // Book: req.file
            
        })
        console.log(req.file.originalname + " was added to the library successfully");
    } catch (error) {
        console.log(error);
    }
    //end

    //create functionality to create new upload on the database


    //end
    return res.json({
        status: "Successful",
        message: "File has been uploaded succesfully"
    });
})

module.exports = router;