import React, { Component } from "react";

class BBsDetail extends Component {
  state = {
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
  };

  state = {
    bbsVO: {},
  };

  // 서버에게 bbsid 값을 전달하고
  // bbs detail 정보를 가져와서
  // 나에게 보여달라
  BBsDetailFetch = () => {
    const bbsid = this.props.match.params.bbsid;
    fetch("http://localhost:8080/bbs/api/detail?bbsid=" + bbsid)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          bbsDate: result.bbsDate,
          bbsAuth: result.bbsAuth,
          bbsTitle: result.bbsTitle,
          bbsText: result.bbsText,

          bbsVO: result,
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

  handleUpdate = () => {
    const bbsid = this.props.match.params.bbsid;
    // 누구한테 보낼 것인가
    this.props.history.push("/bbsWrite/" + bbsid);
  };

  handleDelete = (e) => {
    if (window.confirm("삭제할까요?")) {
      const bbsid = this.props.match.params.bbsid;
      fetch("http://localhost:8080/bbs/api/delete/" + bbsid)
        .then(this.props.history.push("/"))
        .catch((error) => console.log(error));
    }
  };

  render() {
    const bbsid = this.props.match.params.bbsid;
    const { bbsVO } = this.state;
    const { bbsDate, bbsAuth, bbsTitle } = this.state.bbsVO;

    return (
      <div className="detail-card">
        <h3>게시판 내용 보기</h3>
        <div className="card">
          <div className="card-header">
            <p>나는 {bbsid} 입니다.</p>
          </div>
          <div className="card-body">
            <p>작성일자 : {bbsDate}</p>
            <p>작성자 : {bbsAuth}</p>
            <p>제목 : {bbsTitle}</p>
            <p>내용 : {bbsVO.bbsText}</p>
          </div>
          <div className="card-footer text-center">
            <button
              className="btn btn-success"
              style={{ cursor: "poniter" }}
              onClick={(e) => this.props.history.push("/")}
            >
              목록
            </button>

            <button
              className="btn btn-warning"
              style={{ cursor: "poniter" }}
              onClick={this.handleUpdate}
            >
              수정
            </button>

            <button
              className="btn btn-danger"
              style={{ cursor: "poniter" }}
              onClick={this.handleDelete}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BBsDetail;
