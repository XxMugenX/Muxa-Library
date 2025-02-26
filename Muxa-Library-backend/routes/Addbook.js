const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({dest : 'uploads/'})


router.route('/').post( upload.single('file'),async (req, res, next) => {
    console.log(req.file);
    console.log(req.body);
    //create functionality to create new upload on the database


    //end
    return res.json({
        status: "Successful",
        message: "File has been uploaded succesfully"
    });
})

module.exports = router;