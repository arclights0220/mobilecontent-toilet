const express = require('express')
const app = express()
const fs = require('fs')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toiletData', { useNewUrlParser: true } );
const toiletscema = require('./models/Toilet');

// Test.find({
//     name: '박창우'
// }).then((d) => {
//     console.log(d);
// });

var toilet = null;
var parseString = require('xml2js').parseString;

function parsing(callback) {
    fs.readFile("./public/toilet.xml", (err, data) => {
        parseString(data, (err, result) => {
            callback(result)
        });
    })
}

parsing(toilet => {
    console.log(toilet.dataGrid.records[0])
})

app.get('/', (req, res) => {
    res.send('환영합니다!')
})

app.get("/getData", (req, res) => {
    if (toilet)
        res.send(toilet)
})

 app.get('/thisLocation', (req, res)=>{ //이거 만들어야 함
     let x = req.body.latitude;  
 })


app.listen(1222, () => console.log("server-start"))