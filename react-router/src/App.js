import React from "react";
import logo from "./logo.svg";
import "./App.css";

// LongComponent as Component
// 이미 존재하는 Component 이름이
// 너무 길어서 사용하기가 불편할 때
// 임의의 별명을 붙여서 단축어로 사용하는 방법
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 3개의 page를 improt하여 Component로 설정
import Home from "./pages/Home";
import BBs from "./pages/BBs";
import BBsList from "./pages/BBsList";
import Login from "./pages/Login";
import MainNav from "./MainNav";

/*
  Router
  Route로 설정된 Component를 요청된 path에 따라
  교체하여 보여주는 영역

  Route에 설정된 path는 웹브라우저 주소창의 URL 중
  mapping path에 따라 Component를 교체하여 보여준다.

  Route의 path에는 설정하는 규칙이 있다.
  기본은 "/" 를 기준으로 모두 분해하여
  각각의 요청 규칙으로 삼는다.

  만약 "/bbs" 라고 요청을 하면
    "/" Route 와
    "/bbs" Route를 또한번 요청하는 결과가 되어
  두개의 route를 모두 보여주게 된다.

  "/" Route 와 "/bbs" Route 가 같이 있을 경우
  "/" Route 에 exact 키워드를 부착하여
    "/bbs" 요청이 있을 경우는
    "/" 요청을 무시하도록 설정해야 한다.

  Switch
  "/" 의 비슷한 그룹을 묶어서 보여주는데
  부모 Component를 제일 하단에 두어야 한다.
*/
function App() {
  return (
    <div className="container-fluid">
      <header className="jumbotron text-center">
        <h3>React Router DOM</h3>
        <input placeholder="아무거나 입력" />
      </header>
      <Router>
        <MainNav />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/bbs/list" component={BBsList} />
          <Route exact path="/bbs/:name" component={BBs} />
          <Route exact path="/bbs" component={BBs} />
        </Switch>
        <Route path="/login" component={Login} />
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
