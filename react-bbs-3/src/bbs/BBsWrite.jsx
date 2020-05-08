import React from "react";
import axios from "axios";

class BBsWrite extends React.Component {
  state = {
    id: 0,
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
  };

  /*
    axios를 사용하여 서버로 데이터를 전송

    Router로 감싸진 상태의 Component들은
    props로 match, location, history와 같은 객체를
    상위 Router로 전달받는다.
    
    match, loaction은 보통 query 문자열을 통하여
    변수값을 전달 받을 때 사용하고

    history는 push() method를 사용하여
    어떤 일을 수행한 후
    원하는 path로 점프하는 코드를 수행할 수 있다.

    
    this.props.history.push("/")를 지정할 때
    Route에 "/" 지정이 되어 있어야 한다.
  */
  bbsInsert = () => {
    let formData = new FormData();
    formData.append("id", this.state.id);
    formData.append("bbsDate", this.state.bbsDate);
    formData.append("bbsAuth", this.state.bbsAuth);
    formData.append("bbsTitle", this.state.bbsTitle);
    formData.append("bbsText", this.state.bbsText);

    axios
      .post("http://localhost:8080/bbs/api/insert", formData)
      .then((result) => {
        const bbsid = result.data.id;
        this.props.history.push("/bbsDetail/" + bbsid);
      })
      .catch((error) => console.log(error));
  };

  BBsDetailFetch = () => {
    // 숫자면 || , 문자면 &&
    // 만약 ...bbsid 값이 undefined이면 0을 id에 저장하고
    // 그렇지 않으면 그 문자열을 id에 저장하라
    const bbsid = this.props.match.params.bbsid || 0;
    // 3항연산자로 표시
    // id = this.props.match.params.bbsid == 'undefined' ? 0 : ...bbsid
    if (bbsid == 0) return;
    fetch("http://localhost:8080/bbs/api/detail?bbsid=" + bbsid)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          id: result.id,
          bbsDate: result.bbsDate,
          bbsAuth: result.bbsAuth,
          bbsTitle: result.bbsTitle,
          bbsText: result.bbsText,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.BBsDetailFetch();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    console.log(this.props);

    return (
      <div className="form-input-box">
        <div className="form-group">
          <label>작성일자</label>
          <input
            className="form-control"
            onChange={this.handleOnChange}
            value={this.state.bbsDate}
            name="bbsDate"
            type="date"
            placeholder="날짜를 입력"
          />
        </div>
        <div className="form-group">
          <label>작성자</label>
          <input
            className="form-control"
            onChange={this.handleOnChange}
            value={this.state.bbsAuth}
            name="bbsAuth"
            placeholder="작성자를 입력"
          />
        </div>
        <div className="form-group">
          <label>제목</label>
          <input
            className="form-control"
            onChange={this.handleOnChange}
            value={this.state.bbsTitle}
            name="bbsTitle"
            placeholder="제목을 입력"
          />
        </div>
        <div className="form-group">
          <label>내용</label>
          <textarea
            className="form-control"
            onChange={this.handleOnChange}
            value={this.state.bbsText}
            name="bbsText"
            rows="5"
            placeholder="내용을 입력"
          />
        </div>
        <div className="text-right">
          <button
            onClick={this.bbsInsert}
            type="button"
            className="btn btn-primary"
          >
            저장
          </button>
        </div>
      </div>
    );
  }
}

export default BBsWrite;
