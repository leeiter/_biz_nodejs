import React, { Component } from "react";

class BucketInsert extends Component {
  // input box를 사용하느 Component에서
  // 사용자가 입력한 문자열을 임시로 담고 있을 변수 선언
  state = {
    bucket_title: ""
  };

  /*
    현재 Component에 선언된 state.bucket_title 변수에 사용자의
    입력 문자열을 담는 역할을 수행

    단, 여기에 문자열을 담는다 하여도
    다른 Component에 문자열이 전파되지는 않는다.
  */
  handleOnChange = event => {
    this.setState({
      // state 변수명을 직접 지정
      bucket_title: event.target.value,
      // input box에 name 속성으로 지정된 문자열을
      // 사용하여 변수명 지정
      // 현재 Component에 input box가 여러개 있을 때
      // 한개의 onChange 이벤트 핸들러만 선언하여
      // 공통으로 사용하기 위한 방법
      [event.target.name]: event.target.value
    });
  };

  /*
    input box에서 문자열을 입력하는 중 enter 키를 누르면
    BucketMain에서 전달받은 이벤트 핸들러에게
    state.bucket_title 변수값ㅇ르 전달하여
    전체 Component가 바라보고 있는 배열에 추가하도록 >>>>>

   */
  //
  handleOnKeyPress = ev => {
    const { bucket_add } = this.props;
    if (ev.key == "Enter") {
      /*

        */
      alert(this.state.bucket_title);
      bucket_add(this.state.bucket_title);
    }
  };

  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          {/*
                input box 처리 방법
                1. Component 자체에 input box의 value로 지정할 state 변수 >>>
                2. value 속성에 state 변수를 지정
                => input box는 read only 상태로 변한다.
                3. 사용자의 입력을 받아서 state 변수에 저장할 수 있도록
                onChange 이벤트 핸들러를 만든다.   
          */}
          <input
            value={this.state.bucket_title}
            onChange={this.handleOnChange}
            onKeyPress={this.handleOnKeyPress}
            name="bucket_title"
            className="w3-input w3-border w3-hover-amber w3-round"
            placeholder="Bucket List Write.."
          />
        </div>
      </section>
    );
  }
}

export default BucketInsert;
