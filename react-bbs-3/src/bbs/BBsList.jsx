import React, { Component } from "react";
import BBsItem from "./BBsItem";

class BBsList extends Component {
  render() {
    const { bbsList } = this.props;
    const bbsMap = bbsList.map((bbsVO) => {
      return <BBsItem bbsVO={bbsVO} />;
    });

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr className="text-center">
            <th>날짜</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>{bbsMap}</tbody>
      </table>
    );
  }
}

export default BBsList;
