import React, { Component } from "react";
import PropTypes from "prop-types";
import BBsList from "./BBsList";

const BBS_FETCH_URL = "http://localhost:8080/bbs/api/json";

class BBsMain extends Component {
  state = {
    bbsList: [],
  };

  fetchBbsList = () => {
    fetch(BBS_FETCH_URL)
      .then((res) => {
        return res.json();
      }) // get으로 가져온 결과를 처리
      .then((result) => {
        this.setState({
          bbsList: result,
        });
      }) // return 된 res.json() 값을 처리
      .catch((error) => {
        console.log(error);
      }); // 오류가 발생했을 때 처리
  };

  render() {
    /*
        state 변수값을 간편하게 자식 컴포넌트에게
        전달하기 위해 비 구조화를 실행
    */
    const { bbsList } = this.state;
    return <BBsList bbsList={bbsList} />;
  }

  componentWillMount() {}

  /*
    현재 BBsMain Component가 rendering 되어 화면에
    그려질 때 호출되는 method로
    여기에서 서버로 부터 데이터를 가져오는
    fetchBbsList를 실행한다.
  */
  componentDidMount() {
    this.fetchBbsList();
  }

  componentWillReceiveProps(nextProps) {}

  /*
    LifeCycle method를 통해서
    어떤 일을 실행하려고 할 때
    return true를 실행해주자.
  */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}
}

BBsMain.propTypes = {};

export default BBsMain;
