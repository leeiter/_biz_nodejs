import React from "react";

/*
    this.props :  부모 Component에서 자식 Component에 변수를 전달하는 통로
*/
const RSC_SUB = ({ name }) => {
  return (
    <div>
      나는 {name} 입니다.<b></b>
    </div>
  );
};

export default RSC_SUB;
