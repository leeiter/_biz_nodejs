import React, { Component } from "react";
import BBsItem from "./BBsItem";
class BBsList extends Component {
  render() {
    const { bbsList } = this.props;
    const bbsMap = bbsList.map((bbsVO) => {
      return <BBsItem bbsVO={bbsVO} />;
    });
    return (
      <div>
        <table className="table table-all">
          <tr>
            <th>날짜</th>
            <th>작성자</th>
            <th>제목</th>
          </tr>
          {bbsMap}
        </table>
      </div>
    );
  }
}

export default BBsList;
