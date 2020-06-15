# firebase Hosting 에 nodejs 프로젝트 올리기

## 작업폴더 다시 작성

- routes, views, config 폴더를 모두 functions 폴더로 이동
- app.js 파일을 functions 폴더로 이동후 index.js 로 변경

## functions 폴더에서 dependency 변경

- npm install pug
- npm install firebase
- npm install firebase-functions

## function 폴더의 package.json 수정

- firebase 에서는 node 10 까지 지원
- "engines": {
  "node": "10"
  },

## project 폴더의 firebase.json 수정

- rewrites의 destination 삭제하고

"destination": "/index.html"

"rewrites": [
{
"source": "**",
"function": "application"
}
]
