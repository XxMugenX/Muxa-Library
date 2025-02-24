const express = require('express');
const router = express.Router();
//const upload = require('multer')
//const router = require(router)


router.route('/').post( async (req, res) => {
    const formData = req.body
    console.log(formData)
    return res.json({
        status: "successful",
    });
})

module.exports = router;