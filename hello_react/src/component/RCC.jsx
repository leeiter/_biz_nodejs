// 지금부터 이 문서는 React의 Component다.
// "" 사용하는 것을 권장
import React, { Component } from "react";
import RCC_SUB from "./RCC_SUB";
import "./RCC.css";

/*
    ES6의 class 문법으로 Componet 생성
    보통 jsx(js) 파일의 형식으로 저장
    가급적 파일의 첫글자, 클래스의 첫글자는 대문자
    파일이름과 클래스이름을 일치
    모든 따옴표는 큰따옴표로 통일하자
    클래스는 1개의 파일에 한개만 작성할 수 있다.

    혹시나 오류가 생기면 react.를 붙여주면 된다.
    react.Component
*/
class RCC extends Component {
  render() {
    return (
      <div>
        <div className="myDiv">나는 첫번째 RCC Component</div>
        <RCC_SUB name="홍길동" />
      </div>
    );
  }
}

// 이 Component를 외부에서 사용할 수 있도록 선언
// export default는 한파일에 한개만 있을 수 있다.
export default RCC;
