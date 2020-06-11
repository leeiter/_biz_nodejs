# Google 의 firebase 연동 프로젝트

- firebase.google.com 페이지를 통해서 프로젝트를 설정하고
- Realtime DB(Croud DB로 업그레이드 중) : Cloud DB를 사용하여 CRUD를 구현하기 위한 서비스
- Hosting : 홈페이지(static web)를 외부에서 접근할 수 있도록 만들어주는 서비스
- firebase functions : node project를 firebase host에서 실행할 수 있도록 지원하는 클라우드

## firebase 연동을 하기 위해 tools를 설치

- firebase-tools : npm install -g firebase-tools
- npm istall -g firebase-tools@latest : 혹시나 설치가 최신 버전(@8.4.2)가 아닐 경우 최신 버전으로 해준다.

## 프로젝트를 firebase로 설정

- npm install firebase
- firebase 프로젝트 초기화 : firebase init

## 프로젝트 서버에 올리기

- firebase deploy

## 프로젝트를 로컬에서 테스트하기

- firebase serve

## nodejs 에서 firebase RealTime DataBase 연동

- npm install firebase
- npm install firebase-admin
- config 설정값 작성
- npm install moment : 날짜와 관련된 middleware
- npm install moment-timezone : 날짜 타임존 설정 middleware

## 오류

- TypeError: obj.hasOwnProperty is not a function 시 app.use(express.urlencoded({ extended: true })); 변경

## firebase login 시 설정

- firebase login 후 firebase login 화면 확인 후 cmd 에서 성공 확인
- firebase DB 생성 : RealTime Database(MongoDB 유사) 로 설정 > 규칙에서 read, write 는 true 로 해야 사용 가능
- storage : 실질적으로 용량이 얼마 안 되어서 사용을 하려면 테스트에서는 어렵고 종량제에서 사용 해야 함
- functions 시작하기 : 실질적으로 Node 사용 가능하게 함
- EsLint : 문법 검사 하는 것 > deploy 할 때 모든 코드를 다시 확인하기 때문에 시간이 오래 걸리는 문제가 있고 VS를 사용하기 때문에 무조건 설치를 해야하지는 않음 > 설치를 안하는 것이 나을 수도 있음
