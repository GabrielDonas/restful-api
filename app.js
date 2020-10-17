const express = require('express')
const app = express()
const port = 3000
require('dotenv/config')
const mongoose = require('mongoose');

//Import Routes
const postsRoute = require('./routes/posts')

//Middleware
app.use('/posts', postsRoute)

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