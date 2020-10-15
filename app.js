const express = require('express')
const app = express()
const port = 3000
require('dotenv/config')
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Connect to the database
mongoose.connect(process.env.DBCONNECTION,
    {useNewUrlParser: true,
    useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database connected')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})