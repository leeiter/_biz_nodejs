// http-errors 같은 형식은
//    미들웨어 라고 한다.
//    dependency와 같은 기능
var createError = require('http-errors'); 
var express = require('express'); // framework
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// index.js 와 users.js를 bean으로 설정하는 역할
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var myRouter = require('./controllers/myController')

var app = express(); // www web으로 넘어간다.

// view engine setup
// __dirname : 
//    시스템 변수, 현재 프로젝트의 root 디렉토리
//    ../../Node_02
// path.join(__dirname, 'views')
//    ../../Node_02/views/라는 형식으로 
//    디렉토리 정보를 생성
// *.ejs(view) 파일들이 저장될 폴더를 지정
app.set('views', path.join(__dirname, 'views')); // resouces 와 같은 기능
app.set('view engine', 'ejs');

app.use(logger('dev'));

// 만약 json형태의 데이터들이 있으면
// 자동 parsing을 수행해달라
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// session과 관련된 미들웨어
app.use(cookieParser());

// resouces 같은 폴더
// static files(image, css, js 등등)을 저장해두었다가
// web의 요청이 있으면 아루런 가공없이 response하라
// img src="" :  web에서 image를 요청한다.
// link href="" : web에서 css를 요청한다.
// script src="" : web에서 js를 요청한다.
app.use(express.static(path.join(__dirname, 'public')));

// localhost:3000/ 라고 요청을 하면
// indexRouter에게 보내라
// requestMapping 하는 역할
app.use('/', indexRouter);

// localhost:3000/ 라고 요청을 하면
// usersRouter에게 보내라
app.use('/users', usersRouter);

// localhost:3000/hello 라고 요청을 하면
//    myRouter(./controller/myController.js)에게
//    요청을 전달하라
app.use("/hello", myRouter);

// 없으면 오류 보내라 404
// catch 404 and forward to error handler
// 에러만 생성을 하고
app.use(function(req, res, next) {
  next(createError(404));
});

// 실질적인 에러를 받아서 보여준다.
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 모두 담아라
module.exports = app;
