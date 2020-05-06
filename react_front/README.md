# React From Project

## Spring boot 서버와 React를 연동한 Front Project

- Spring Boot REST Full 서버로 화면단이 없는 순수한 서버
- React는 서버로부터 데이터를 수신하여 View만을 담당하는 역할 수행

* Spring을 사용하는 Rest Full 서버는 @RestController를 사용해서 모든 정보를 JSON으로 보내는 구조가 된다.
* React는 Fetch, Axios 등의 도구를 사용하여 서버에 데이터를 요청하고 수신한 데이터를 미리 만들어진 Component를 사용하여 Render를 한 후 보여주는 역할을 수행한다.

* BBsMain Component > BBsList Component > BBsItem Component(여러개)의 구조로 형성이 된다.

## react-router-dom

- react는 전통적으로 SPA(single Page Application) 구조를 가지고 있다. 한 페이지에 스크롤을 하면서 모든 정보를 표현하는 방식
- menu(nav)를 사용해서 페이지를 전환하는 것이 없었다.
- App 만들다 보니 SPA에서도 메뉴라는 것이 필요하거나 CRUD 같은 것들을 구현할 때 SPA 방식에서는 어색하고 한계가 있었다.

- 그래서 탄생한 것이 router 플러그인이다.

## axios
