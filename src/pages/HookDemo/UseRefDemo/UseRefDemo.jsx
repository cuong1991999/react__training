import React from "react";
import { useRef } from "react";
import { useState } from "react";

const UseRefDemo = () => {
  const [number, setNumber] = useState(1);

  //   const [comment, setComment] = useState("");
  const commentRef = useRef("");
  const inputRef = useRef(null);
  const handleChange = (e) => {
    // setComment(e.target.value);
    commentRef.current = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(commentRef.current);
    inputRef.current.style.background = "green";
  };
  return (
    <div className="container">
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <div className="card">
        <div className="card-header">
          <div className="comment p2" style={{ backGround: "#eee" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            similique alias eligendi provident ex expedita magni corrupti
            consectetur, laborum dolore reprehenderit iste eveniet culpa ut
            odit. Quas fuga magni facilis!
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="form-control"
              onChange={handleChange}
            />
            <button type="sunmit" className="btn btn-success mt-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseRefDemo;
