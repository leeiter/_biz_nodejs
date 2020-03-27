import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  id = 0;
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_flag_text: "☆",
        b_start_date: "2020-03-26",
        b_title: "React 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancle: false
      }
    ]
  };

  // 17이후는 사용불가
  // 매우 불장정하고 무한루프에 빠지기가 쉽다.
  // componentWillMount()

  /*
   현재 Component가 모두 연결되고 화면에 나타난 직후
   rendering 바로 직전
  */
  componentDidMount() {
    const strBucketList = localStorage.bucketList;
    // 문자열, 객체일 경우 if 조건에서 없으면 false, 있으면 true
    if (strBucketList) {
      const jsonBucketList = JSON.parse(strBucketList);
      this.setState({
        bucketList: jsonBucketList
      });
      this.id = jsonBucketList.length;
    }
  }

  /*
    화면에 rendering이 끝나고
    데이터 변경되어 다시 rendering이 되려고 할 때
  */
  componentDidUpdate(preProps, preState) {
    // 객체를 통째로 문자열로 변경
    const preString = JSON.stringify(preState.bucketList);
    const thisString = JSON.stringify(this.state.bucketList);

    // webbrowser 내장 DB에 문자열 저장.
    // 이때 key : bucketList
    if (preString !== thisString) {
      localStorage.bucketList = thisString;
    }
  }

  changeFlag = id => {
    // const b_flage = ["☆", "★", "◎", "●"];
    const b_flage = ["대충", "일반", "중요", "매우중요"];
    this.setState({
      bucketList: this.state.bucketList.map(bucket => {
        if (bucket.b_id === id) {
          let flag = ++bucket.b_flag % 4;
          let flagText = b_flage[flag];
          return {
            ...bucket,
            b_flag_text: flagText,
            b_flag: flag
          };
        } else {
          return bucket;
        }
      })
    });
  };

  /*
    bucketList에 항목을 추가하여 전체 Component에 전파될 수 있도록
    method 선언

    React 선언적 철학 1
    기존 객체(배열)은 원본을 손상시키지 말자
    => 아래와 같은 기능을 구현하지 마라
        객체 배열에 새로운 항목을 추가 : push()
        객체 배열에서 항목을 제거 : remove()
        객체 배열의 요소 중에 어떤 항목 변경 할 때 : 객체[0] = 새로운 값
    => 그러면 어떻게??
    새로운 객체를 만들고
        추가 : 기존 객체 + 추가된 항목 생성하여 새로운 객체에 복사
        변경 : 기본 객체 변경내용만 변경하여 새로운 객체에 복사
  */
  bucket_add = b_title => {
    const { bucketList } = this.state;

    const date = new Date();

    // b_id 값은 bucketList의 PK 값을 값는 칼럼으로
    // state 지정된 id 값을 1 증가시키므로서 생성을 하고
    // 리스트의 b_id 칼럼에 값을 저장
    const bucket = {
      // b_id: ++this.id,
      b_flag: 0,
      b_flag_text: "일반",
      b_start_date: date.toString(),
      b_title: b_title,
      b_end_date: "",
      b_end_check: false,
      b_cancle: false
    };

    this.setState({
      // id가 ++this.id
      // 나머지 요소가 bucket에서 정의한 형태의 객체(vo)를 생성하여
      // 원본의 bucketList에 추가하여
      // 새로운 bucketList를 생성하라
      bucketList: bucketList.concat({ b_id: ++this.id, ...bucket })
      // new : old + 추가 일 때, 비교해서 추가 부분만 변경한다.
    });
  };

  bucket_update = (id, b_title) => {
    const { bucketList } = this.state;

    this.setState({
      // bucketList를 map으로 반복 실행하면서
      // 각요소의 id값과 매개변수로 받은 id값이 일치하면
      // b_title만 새로운 값으로 변경하여 return
      bucketList: bucketList.map(bucket =>
        bucket.b_id === id ? { ...bucket, b_title: b_title } : bucket
      )
    });
  };

  // react lifeCycle() method
  /*
    만약 현재 Main Component에 많은 State 변수들이 있을 때
    한개라도 state 변수가 변동되면 rendering이 발생을 할텐데

    그러지 말고
    state 변수 중에서 bucketList만 감시하다가
    bucketList가 변경되었을 때만 화면을 rendering을 하라
  */
  shouldComponentUpdate(nextProps, nextState) {
    // return nextState.bucketList !== this.state.bucketList;
    // 추가 후 !== 추가 전 => true 가 되면 rendering start
    // false = rendering stop

    return true;
  }

  render() {
    return (
      <div>
        <p>Bucket List Main</p>
        <BucketInsert bucket_add={this.bucket_add} />
        <BucketList
          bucket_update={this.bucket_update}
          bucketList={this.state.bucketList}
          changeFlag={this.changeFlag}
        />
      </div>
    );
  }
}

export default BucketMain;
