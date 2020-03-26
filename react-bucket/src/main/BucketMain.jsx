import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  id = 0;
  state = {
    bucketList: [
      {
        id: 0,
        b_flag: "☆",
        b_start_date: "2020-03-26",
        b_title: "React 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancle: false
      }
    ]
  };

  // bucketList에 항목을 추가하여 전체 Component에 전파될 수 있도록
  /*
    method 선언

    React 선언적 철학 1
    기존 객체(배열)은 원본을 손상시키지 말자
    => 아래와 같은 기능을 구현하지 마라
    객체 배열에 새로운 항목을 추가 : push()
    객체 배열에서 항목을 제거 : remove()
    객체 배열의 요소 중에 어떤 항목 변경 할 때 : 객체[0] = 새로운 값
    => 그러면 어떻게??
    새로운 객체를 만들고
    추가 : 기존 객체 + 추가된 항목 생성하여 새로운 객체에 복소
    변경 : 기본 객체 변경내용만 변경하여 새로운 객체에 복사
  */
  bucket_add = b_title => {
    const { bucketList } = this.state;

    const date = new Date();
    // 2020-03-26 날짜 문자열 생성
    const b_start_date = String.format(
      "%s-%02s-%02s",
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );

    // b_id 값은 bucketList의 PK 값을 값는 칼럼으로
    // state 지정된 id 값을 1 증가시키므로서 생성을 하고
    // 리스트의 b_id 칼럼에 값을 저장
    const bucket = {
      b_id: ++this.id,
      b_start_date: b_start_date,
      b_title: b_title
    };

    this.setState({
      bucketList: bucketList.concat({ id: ++this.id, ...bucket })
      // new : old + 추가 일 때, 비교해서 추가 부분만 변경한다.
    });
  };

  // react lifeCycle() method
  /*
    만약 현재 Main Component에 많은 State 변수들이 있을 때
    한개라도 state 변수가 변동되면 rendering이 발생을 할텐데

    그러지 말고
    state 변수 중에서 bucketList만 감시하다가
    bucketList가 변경되었을 때만 화면을 rendering 하라
  */
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.bucketList !== this.state.bucketList;
    // 추가 후 !== 추가 전 => true 가 되면 rendering start
    // false = rendering stop
  }

  render() {
    return (
      <div>
        <p>Bucket List Main</p>
        <BucketInsert bucket_add={this.bucket_add} />
        <BucketList bucketList={this.state.bucketList} />
      </div>
    );
  }
}

export default BucketMain;
