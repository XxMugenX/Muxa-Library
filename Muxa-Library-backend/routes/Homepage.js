const express = require('express');
const router = express.Router();


router.route('/').get(async (req, res) => {
    return res.json(
        [{
            Title: "classroom of elites",
            Author: "japan",
             
        },
        {
            Title:"solo leveling",
            Author: " korean",
             
        },
        {
            Title:"god of highschool",
            Author:"china",
             
        },
        {
            Title: "rick and morty",
            Author: " america",
             
        },
        {
            Title: "record of ragnarok",
            Author: "japan",
             
        }]
)
})
module.exports = router;