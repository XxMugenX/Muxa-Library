const express = require('express');
require('dotenv').config();
const cors = require('cors');
const router = express.Router();
const upload = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const homepageRoute = require('./routes/Homepage');
const addbookRoute = require('./routes/Addbook');

app.use('/', homepageRoute);
app.use('/addbook', addbookRoute);

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
})

module.exports = router;