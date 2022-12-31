import React, { Component } from "react";

export default class Children extends Component {
  //duoc chay moi khi state /props thay doi va chay phuong thuc render
  // neu return ve false => khong cho phep chay phuong thuc render
  // shouldComponentUpdate cung cap 2 tham so lan luot la gia tri sau khi thay doi cua props va state
  shouldComponentUpdate(nextProps, newState) {
    // chi cho phep render lai neu prop user id bi thay doi
    if (nextProps.userId !== this.props.userId) {
      return true;
    }
    return false;
  }
  render() {
    console.log("Children render run");
    return (
      <div>
        <h1>Children - {this.props.userId}</h1>
      </div>
    );
  }
}
