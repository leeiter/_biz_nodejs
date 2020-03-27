import React, { Component } from "react";
import Moment from "react-moment";
import BucketContext from "../provider/BucketProvider";

class BucketItemView extends Component {
  static contextType = BucketContext;

  noChangeEdit = ev => {
    ev.stopPropagation();
  };

  changeEdit = ev => {
    ev.stopPropagation();
    const { bucketItem } = this.props;

    if (bucketItem.b_cancel) {
      alert("취소된 버킷은 완료 설정을 할 수가 없습니다.");
      return false;
    }

    if (bucketItem.b_end_date !== "") {
      alert("완료료된 버킷은 수정할 수 없습니다.");
      return false;
    } else {
      this.props.onEditing();
    }
  };

  handleChangeFlag = ev => {
    ev.stopPropagation();

    // 분해하지 않은 코드
    // this.props.changeFlag(this.props.bucketItem.b_id);

    /*
      전달받은 changeFlag와 bucketItem을 잘 살펴봐야 한다.
      bucketItem :  바로 위(BucketItem)에서 전달받은 state 형 변수이고
      changeFlag : Main에서 여기까지 전달되어 온 handler method이므로

      분해를 할 때 주체가 누구인가를 명확하게 구별해야 한다.
      bucketItem은 this.props로 부터
      changeFlag는 this.context로 부터 분리를 해야 한다.
    */
    // 분해한 코드
    const { bucketItem } = this.props;
    const { changeFlag } = this.context;

    changeFlag(bucketItem.b_id);
  };

  onComplete = ev => {
    ev.stopPropagation();
    const { bucket_complete } = this.context;
    const { b_id, b_end_date, b_cancel } = this.props.bucketItem;

    if (b_cancel) {
      alert("취소된 버킷은 완료 설정을 할 수가 없습니다.");
      return false;
    }

    if (b_end_date === "") {
      if (!window.confirm("Dream Come True?")) {
        return false;
      }
    } else {
      if (!window.confirm("Bucket reStart?")) {
        return false;
      }
    }
    // 해당 항목을 완료로 처리
    bucket_complete(b_id, b_end_date);
  };

  toggleCancel = () => {
    if (this.props.bucketItem.b_end_date !== "") {
      alert("완료된 버킷은 취소할 수 없습니다.");
      return false;
    }

    if (window.confirm("버킷을 취소하겠습니까?")) {
      this.context.toggleCancel(this.props.bucketItem.b_id);
    }
  };

  render() {
    const { bucketItem } = this.props;
    const td_style = {
      cursor: "pointer"
      // "&:hover": {
      //   backgroundColor: "#FF00FF",
      //   textDecoration: "underline"
      // }
    };

    const td_through = {
      cursor: "pointer",
      textDecorationLine: "line-through",
      textDecorationStyle: "wavy", // double, solid, dotted, dashed
      textDecorationColor: "red",
      fontWeight: "bold", // font-weight,
      color: "blue"
    };

    return (
      <React.Fragment>
        <td style={td_style} onClick={this.handleChangeFlag}>
          {bucketItem.b_flag_text}
        </td>
        <td onClick={this.noChangeEdit}>
          {bucketItem.b_id} :&nbsp;
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td
          style={bucketItem.b_end_date !== "" ? td_through : td_style}
          onClick={this.changeEdit}
        >
          {bucketItem.b_title}
        </td>
        <td style={td_style} onClick={this.onComplete}>
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
        <td onClick={this.noChangeEdit}>
          <input
            onClick={this.toggleCancel}
            type="checkbox"
            checked={bucketItem.b_cancel}
          />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemView;
