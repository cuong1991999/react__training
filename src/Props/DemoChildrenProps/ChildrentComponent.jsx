import React, { Component } from "react";

export default class ChildrentComponent extends Component {
  render() {
    return (
      <div>
        <h3>Bai tap xem chi tiet</h3>
        <p>{this.props.children.map((item) => item)}</p>
      </div>
    );
  }
}
