/*
    js의 변수 선언자
    var : 전역 변수, 현재 모듈(*.js) 어디에서나
        값을 읽고 쓸수 있는 선언
    const : 상수, 현재 모듈 어디에서나
        값을 읽을 수 있고
        최초 한번만 값을 할당할 수 있다.
        java에서의 final과 같다.
    let : 지역변수, 현재 함수 내에서만
        값을 읽고 쓸수 있으며
        함수를 벗어나면 변수가 해제된다.
*/
var mong = require("mongoose")

// CamelCase로 선언하는 것이 좋다.
var bookModel = mong.Schema({
    BName : {
        type : String,
        require : true, // NOT NULL
        unique : true, // UNIQUE
        trim : true // 빈칸없이
    },
    BComp : String,
    BWriter : String,
    BPrice : Number,
    BYear : {
        type : String,
        lowercase : true // 모든 문자를 소문자로 표현
    }
})

/*
    model()에 설정하는 document(book) 이름을
    반드시 단수로 지정한다.(하는 것이 좋다.)

    실제 DB에 저장될 때는
    document 이름이 복수로 변경되어 저장
    mongo console에서 조회를 할 때는 다음과 같이
        db.books.find({})
*/
module.exports = mong.model("book", bookModel)
