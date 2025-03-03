const express = require('express');
require('dotenv').config();
const cors = require('cors');
const router = express.Router();
const upload = require('multer');
const mongoose = require('mongoose');

const app = express();
const connection = mongoose.connection;
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const URI = process.env.ATLAS_URI;
const homepageRoute = require('./routes/Homepage');
const addbookRoute = require('./routes/Addbook');

app.use('/', homepageRoute);
app.use('/addbook', addbookRoute);

//get URI from mongodb
mongoose.connect(URI);

connection.once('open', () => {
    console.log('Database is up');
})
app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
})