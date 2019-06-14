const mongoose = require('mongoose');

const toiletSchema = new mongoose.Schema({
    both: { //화장실 종류
        type: String
    },
    toiletName: { //화장실 이름
        type: String
    },
    roadAdr: { //도로명 주소
        type: String
    },
    earthAdr: { //지번 주소
        type: String
    },
    manorGirl: { //남녀공용화장실여부
        type: String
    },
    manBig: {//성인남자 대변기 수
        type: Number
    },
    manSmall: {//성인남자 소변기 수
        type: Number
    },
    heartManBig: { //장애인성인남자 대변기 수
        type: Number
    },
    heartManSmall: { //장애인성인남자 소변기 수
        type: Number
    },
    boyBig: { //소년 대변기 수
        type: Number
    },
    boySmall: { //소년 소변기 수
        type: Number
    },
    womanBig: { //성인여자 대변기 수
        type: Number
    },
    heartWomanBig: { //장애인여자 대변기 수
        type: Number
    },
    girlBig: { //소녀 대변기 수
        type: Number
    },
    centerName: { //관리기관명
        type: String
    },
    callAdr: { //전화번호
        type: Number
    },
    openTime: { //개방시간
        type: Number
    },
    firstOpenDate: { //첫오픈일
        type: String
    },
    latitude: { //위도
        type: Number
    },
    longitude: { //경도
        type: Number
    },
    lastUpdate: { //마지막업데이트일
        type: String
    },
    giverCode: { //제공자코드
        type: String
    },
    giverName: { //제공자명
        type: String
    }
})
module.exports = mongoose.model('toilet', toiletSchema);