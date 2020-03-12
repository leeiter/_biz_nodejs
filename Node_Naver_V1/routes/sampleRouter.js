var express = require('express')
var router = express.Router()

router.get("/", function() {
    res.send("Sample Router")
})

module.exports = router;