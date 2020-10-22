const express = require('express')
const app = express()
const port = 3000
require('dotenv/config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//Import Routes
const postsRoute = require('./routes/posts')

//Middleware
app.use(cors())
app.use(bodyParser.json())

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
  console.log(`App listening at http://localhost:${port}`)
})