import React, { useCallback } from "react";
import { useState } from "react";
import Comment from "./Comment";
const UseCallBackDemo = () => {
  const [like, setSate] = useState(1);
  const [number, setNumber] = useState(1);
  const renderLike = () => {
    return `ban da like`;
  };
  const callBackRenderLike = useCallback(renderLike, []);
  return (
    <div className="container">
      <h3>UseStateDemo</h3>
      <p>Number: {number}</p>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <h3>Like: {like}</h3>
      <button
        className="btn btn-danger mr-2"
        onClick={() => {
          setSate(like + 1);
        }}
      >
        <i className="fa fa-heart"></i>
      </button>
      <Comment like={like} renderLike={callBackRenderLike} />
    </div>
  );
};

export default UseCallBackDemo;
