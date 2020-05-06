import React from "react";
import BBsItem from "./BBsItem";

/*
    함수형 Component
*/
/*
    BBsMain에서 전달해준 bbsList에 담긴 게시판 리스트를
    BBsItem 컴포넌트와 조합하여 리스트를 생성
*/
const BBsList = ({ bbsList }) => {
  // 배열.map, 객체리스트(List).map()
  // spring forEach문에 해당하는 함수
  // 1개씩 담겨온다.
  const bbsMap = bbsList.map((bbsVO) => {
    return <BBsItem key={bbsVO.id} bbsVO={bbsVO} />;
  });

  return (
    <table className="table table-all">
      <tr>
        <td>날짜</td>
        <td>작성자</td>
        <td>제목</td>
      </tr>
      {bbsMap}
    </table>
  );
};

export default BBsList;
