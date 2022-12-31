import React, { memo } from "react";
const Comment = (props) => {
  console.log("comment");
  return (
    <div className="mt-5">
      <p>{props.renderLike()}</p>
      ban da tha {props.like}
      <i className="fa fa-heart"></i>
      <textarea></textarea> <br />
      <button>Gửi</button>
    </div>
  );
};
export default memo(Comment);
