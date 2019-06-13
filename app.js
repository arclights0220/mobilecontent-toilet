const express = require('express')
const app = express()
const fs = require('fs')


var toilet = null;
var parseString = require('xml2js').parseString;

fs.readFile("./public/toilet.xml", (err, data) => {
    parseString(data, (err, result) => {
        toilet = result
    });
})

app.get('/', (req, res) => {
    res.send('환영합니다!')
})

app.get("/getData", (req, res) => {
    if (toilet)
        res.send(toilet)
})

// app.get('/thisLocation', (req, res)=>{
//     let x = req.body.latitude / 
// })


app.listen(1222, () => console.log("sever-start"))