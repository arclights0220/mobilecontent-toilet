const mongoose = require('mongoose');

const toiletSchema = new mongoose.Schema({
    name: { //화장실 종류
        type: String
    },
    age: { //화장실 이름
        type: Number,
    }
})

module.exports = mongoose.model('fuck', toiletSchema);