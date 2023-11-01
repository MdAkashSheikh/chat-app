require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONN)
.then(() => console.log("Database is Connected."))
.catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Listening On PORT ${PORT}`);
})
