var express = require('express')

var app = express()
//Define request response in root URL (/)  
app.get('/', function (req, res) {
    res.send('Chào mừng bạn đã đến với docker!');
})

//Launch listening server on port 8081  
app.listen(8081, function () {
    console.log('app listening on port 8081!')
})