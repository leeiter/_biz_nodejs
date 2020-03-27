import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  render() {
    const { bucketList } = this.props;

    // 1개의 callback 함수 - 화살표 함수를 이용한 축약형 코드
    const list = bucketList.map(bucket => (
      <BucketItem
        key={bucket.b_id}
        bucket_update={this.props.bucket_update}
        bucketItem={bucket}
        changeFlag={this.props.changeFlag}
      />
    ));

    // callback 일반 함수
    // const list1 = bucketList.map(bucket => {
    //   return <BucketItem key={bucket.id} bucketItem={bucket} />;
    // });

    // 기본 함수 코드
    const f1 = function(arg1, arg2) {
      return arg1 + arg2;
    };

    // 화살표 함수 1
    const f2 = (arg1, arg2) => {
      return arg1 + arg2;
    };

    // 화살표 함수 2
    const f3 = (arg1, arg2) => arg1 + arg2;

    return (
      <section className="w3-contaoner-fluid">
        <table className="w3-table w3-table-all">
          <tr>
            <th>FALG</th>
            <th>추가일자</th>
            <th>BUCKET</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
          {list}
        </table>
      </section>
    );
  }
}

export default BucketList;
