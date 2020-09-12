var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var mongourl = require('./config/mongourl');
var route = require('./routes/recipe')

var app = express();

app.use(cors())
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use('/', route)


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

mongoose.Promise = global.Promise;

mongoose.connect(mongourl.url, {
    useNewUrlParser: true
}).then(()=>{
    console.log('Database connected Successfully');
}).catch(()=>{
    console.log('Unable to connect database');
    process.exit()
})