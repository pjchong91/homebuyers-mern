const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/users');

// Table names should match here
app.use('/income_events', eventsRouter);
app.use('/users', usersRouter);

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html')
// })

mongoose
    .connect('mongodb://127.0.0.1:27017/homebuyers', { useNewUrlParser: true })
    .catch(e => {
        console.log('Connection error: ' + e.message)
    })

const db = mongoose.connection

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});