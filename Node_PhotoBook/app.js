var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var dbConn = mongoose.connection;

// DB 연결 event 핸들링 설정
dbConn.once("open", function () {
  console.log("MongoDB Open OK!!");
});

dbConn.on("error", function () {
  console.error;
});

// DB 연결하는 method 실행
mongoose.connect("mongodb://localhost/myphoto", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*
  require() 확장모듈, 미들웨어 등을 import 하는 명령 함수
  ES5 이하에서 js 파일을 외부에 분리하고
  실제 사용할 때는 import 사용하는 방식

  ES6 이상에서는 import 키워드로 사용이 되는데
  아직 node 12버전이하에서는 improt 키워드를 지원하지 않음

  node 14 버전 이상에서는 import 키워드를 공식으로 지원

  require()를 사용해서 improt 할때,

    require('./routes'); // routes 폴더(dir)를 지정하는 방법
      지정한 위치에서 routes.js 파일을 찾고
      차일이 없으면 routes/index.js 파일을 찾는다.

    require("./routes/users"); / routes/users.js 파일을 지정하는 방법
*/

//routes/index.js 파일 import
var indexRouter = require("./routes");
var usersRouter = require("./routes/users");
var myRouter = require("./routes/myRouter.js");

// routes/photo/index.js 파일 improt
var photoRouter = require("./routes/photo/photoRouter");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// localhost:3000/ 로 request를 요청하면
// indexRouter 모듈을 불러와서 요청을 처리하라
// spring에서 Controller 역할을 수행하는 모듈
app.use("/", indexRouter);

// localhost:3000/users/* 로 request를 요청하면
// userRouter 모듈을 불러와서 요청을 처리하라
app.use("/users", usersRouter);
app.use("/my", myRouter);
app.use("/photo", photoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
