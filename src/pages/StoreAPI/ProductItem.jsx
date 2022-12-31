import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { thumbnail, title, description, price } = this.props.product;
    return (
      <div className="card">
        <img
          src={thumbnail}
          alt=""
          className="card-img"
          height={250}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title" style={{ fontSize: 16 }}>
            {title}
          </h3>
          <p className="card-text">{price}$</p>
          <button className="btn btn-success">Detail</button>
        </div>
      </div>
    );
  }
}
