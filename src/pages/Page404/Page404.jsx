import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <h3>Khong tim thay noi dung</h3>
        <h3>
          Bam vao day
          <NavLink className="btn btn-success" to="/">
            Tro ve trang chu
          </NavLink>
        </h3>
      </div>
    );
  }
}
// function main(isActive) {
//   let
// }
// main({isActive:true})
