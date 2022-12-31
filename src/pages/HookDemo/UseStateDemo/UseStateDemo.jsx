import React, { useState } from "react";

const UseStateDemo = () => {
  const [number, setNumber] = useState(10);
  const [state, setSate] = useState({ like: 1 });
  const [fontSize, setfontSize] = useState(16);
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
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setNumber(number - 2);
        }}
      >
        -
      </button>
      <hr />
      <h3>Like: {state.like}</h3>
      <button
        className="btn btn-danger mr-2"
        onClick={() => {
          setSate({
            like: state.like + 1,
          });
        }}
      >
        <i className="fa fa-heart"></i>
      </button>
      <hr />
      <p style={{ fontSize: fontSize }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus
        labore temporibus, fuga commodi maiores illo maxime mollitia earum
        exercitationem!
      </p>
      <button
        className="btn btn-success mx-2"
        onClick={() => {
          setfontSize(fontSize + 2);
        }}
      >
        +
      </button>
      <button
        className="btn btn-success mx-2"
        onClick={() => {
          setfontSize(fontSize - 2);
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseStateDemo;
