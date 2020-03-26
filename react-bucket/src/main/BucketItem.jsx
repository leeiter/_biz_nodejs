import React from "react";

const BucketItem = ({ bucketItem }) => {
  return (
    <tr>
      <td>{bucketItem.b_flag}</td>
      <td>{bucketItem.b_start_date}</td>
      <td>{bucketItem.b_title}</td>
      <td>{bucketItem.b_end_date}</td>
      <td>{bucketItem.b_cancle}</td>
    </tr>
  );
};

export default BucketItem;
