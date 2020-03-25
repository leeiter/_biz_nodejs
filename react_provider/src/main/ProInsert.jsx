import React, { Component } from "react";
import MProvider from "../provider/MessageProvider";
import ProFunc from "./ProFunc";

class ProInsert extends Component {
  state = {
    message: "나는 Insert Component"
  };

  static contextType = MProvider;

  // 키보드에서 입력을 하면 입력받은 문자열을
  // this.state.message 에 저장해 달라

  // handleChange에서 this.state.message를 변경하면
  // 현재 Component 어디에 this.state.message가 있던 상관없이
  // 동시에 변경된 값이 표현돤다.
  handleChange = ev => {
    this.setState({ message: ev.target.value });
  };

  // main -> Sub2 -> 나에게 전달된 changeMessage method를
  // 호출하여 지금부터
  messageSend = () => {
    this.context.changeMessage(this.state.message);
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h5>입력박스</h5>
        <label>문자열을 입력하세요</label>
        {/*
            react에서 input box를 사용하려면
            1. 먼저 value 포함시킬 state 변수를 선언하고
            2. value={this.state.변수}라고 작성하고
            3. onChange 이벤트를 캡쳐하여 키보드에서 입력된 문자열을
                this.state.변수에 this.state()(반영을) 시킨다.
        */}
        <input value={this.state.message} onChange={this.handleChange} />
        <button onClick={this.messageSend}>전달</button>
        <p>{message}</p>
        <h4>함수방식 Component 가져오기</h4>
        <ProFunc />
      </div>
    );
  }
}

export default ProInsert;
