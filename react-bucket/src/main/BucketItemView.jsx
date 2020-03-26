import React, { Component } from "react";
import Moment from "react-moment";

class BucketItemView extends Component {
  changeEdit = () => {
    this.props.onEditing();
  };

  handleChangeFlag = () => {
    // 분해하지 않은 코드
    // this.props.changeFlag(this.props.bucketItem.b_id);

    // 분해한 코드
    const { changeFlag, bucketItem } = this.props;
    changeFlag(bucketItem.b_id);
  };

  render() {
    const { bucketItem } = this.props;
    return (
      <React.Fragment>
        <td onClick={this.handleChangeFlag}>{bucketItem.b_flag_text}</td>
        <td>
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td onClick={this.changeEdit}>{bucketItem.b_title}</td>
        <td>
          {/*
            React에서 조건별로 tag를 표시하고자 할 때
            {검사값 ? (true일 때) : (false일 때)}
          */}
          {bucketItem.b_end_date !== "" ? (
            <Moment format="YYYY-MM-DD">{bucketItem.b_end_date}</Moment>
          ) : (
            "◎"
          )}
        </td>
        <td>
          <input type="checkbox" value={bucketItem.b_cancle} />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemView;
