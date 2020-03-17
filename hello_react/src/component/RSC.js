import React from "react";
import RCC_SUB from "./RCC_SUB";

/*
    함수형 Component 생성
    const RSC = function() {}
    함수형 Componetn는 2014버전에서 부터 사용가능
    App.js > RCC.jsx, (RSC.js > RCC_SUB.jsx)

    RCC_SUB Component에서 name 변수에 값을 담아서 전달하기
    <COM 변수="값"/>
*/
const RSC = () => {
  return (
    <div>
      <div>나는 두번째 함수형 Component</div>
      <RCC_SUB name="홍길동" />
    </div>
  );
};

export default RSC;
