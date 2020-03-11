var express = require('express')
var router = express.Router()

// router를 선언하는 곳에서(app.js)에서
// 매개변수로 config 값을 전달하기 위해서
// module.exports 이전과 다른 방법으로 선언
module.exports = function(config) {
    router.get("/getStation", function(req, res) {
        res.json(config)
    })
    return router
}