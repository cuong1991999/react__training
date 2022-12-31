import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { item, viewDetail } = this.props;
    return (
      <div className="card text-white bg-primary">
        <img src={item.img} alt="Title" className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}$</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              viewDetail(item);
            }}
          >
            View detail
          </button>
        </div>
      </div>
    );
  }
}
