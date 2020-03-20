import React, { Component } from "react";

class PhoneList extends Component {
  render() {
    // phoneMain에서 보내준 모든 매개변수 중에서
    // phoneList가 있을테니 내가 사용할 수 있도록
    // (분해)추출해 달라
    const { PhoneList, name, phone, addr, my_value } = this.props;

    return (
      <div>
        <p>PHONE LIST</p>
        <p>{name}</p>
        <p>{phone}</p>
        <p>{addr}</p>
        <p>List에서 myValue : {my_value}</p>
      </div>
    );
  }
}

export default PhoneList;
