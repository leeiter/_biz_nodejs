import React, { Component } from "react";
import axios from "axios";

const BBS_INSERT_URL = "http://localhost:8080/bbs/api/insert";

class BBsWrite extends Component {
  state = {
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
  };

  /*
    react에서는 input 박스에 state 변수를 value 값으로 세팅하면
    ※ 데이터를 외부에서 불러오거나 했을 때 자동으로 해당 input 박스에
        값이 세팅되도록 하기 위한 조치

    이 기능을 사용하게 되면
    키보드로 문자열을 입력했을 때 문자열이 입력이 안된다.

    각각의 입력박스에 onChange 이벤트를 설정해서
    키보드로 입력한 문자열을 state 변수에 세팅해주는 절차가 필요하다.
    > handlChangebbsDate 각 1개씩 이벤트 설정

    문제는
    input box가 1, 2개 정도이면 각각의 input box에 event 핸들러를
    부착하여 작동시키면 되는데
    input box가 많아지면 관리가 힘들고
    input box의 추가나 변경이 발생하면 유지보수가 매우 어려워진다.

    그래서 여러개의 input box가 있ㅇ르 경우는
    1개의 event 핸들러를 작성하고
    공통으로 활용하는 방법이 주로 사용된다.
    > handlChange n개를 공통으로 이벤트 설정 가능

    ES7부터 가능
  */
  handlChangebbsDate = (e) => {
    this.setState({
      bbsDate: e.target.value,
    });
  };

  handlChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  bbsInsert = () => {
    let formData = new FormData();
    formData.append("bbsDate", this.state.bbsDate);
    formData.append("bbsAuth", this.state.bbsAuth);
    formData.append("bbsTitle", this.state.bbsTitle);
    formData.append("bbsText", this.state.bbsText);

    axios
      .post(BBS_INSERT_URL, formData)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label>작성일자</label>
          <input
            className="form-control"
            name="bbsDate"
            onChange={this.handlChange}
            value={this.state.bbsDate}
          />
        </div>
        <div className="form-group">
          <label>작성자</label>
          <input
            className="form-control"
            name="bbsAuth"
            onChange={this.handlChange}
            value={this.state.bbsAuth}
          />
        </div>
        <div className="form-group">
          <label>제목</label>
          <input
            className="form-control"
            name="bbsTitle"
            onChange={this.handlChange}
            value={this.state.bbsTitle}
          />
        </div>
        <div className="form-group">
          <label>내용</label>
          <textarea
            className="form-control"
            rows="5"
            name="bbsText"
            onChange={this.handlChange}
            value={this.state.bbsText}
          />
        </div>
        <div className="text-right">
          <button
            type="button"
            onClick={this.bbsInsert}
            className="btn btn-primary"
          >
            게시글 등록
          </button>
        </div>
      </form>
    );
  }
}

export default BBsWrite;
