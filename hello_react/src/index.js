import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import PlusMain from "./plusNumber/PlusMain_01";
// import PlusMain from "./plusNumber/PlusMain_02";
// import PlusMain from "./plusNumber/PlusMain_03";
// import PlusMain from "./plusNumber/PlusMain_04";
import Layout from "./layout/LayoutMain_01";

import * as serviceWorker from "./serviceWorker";

// 가상돔에 app이라는 컴포넌트를 호출해서 root라는 친구를 조회해서 모든 것을 렌더링 해라
// index.js, app.js, index.html
ReactDOM.render(<Layout name="PlusMain" />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 시작 진입점
// 컴포넌트
