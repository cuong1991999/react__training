import React, { Component } from "react";

export default class DataBinding extends Component {
  product = {
    id: 1,
    name: "product1",
    price: 1000,
    image: "http://i.pravatar.cc",
  };

  tong2so = (a, b) => {
    //dữ liệu trả về của phương thức : string, number, boolean, jsx Component (<div>....</div>) không return về object hoặc array
    return a + b;
  };
  renderProduct = () => {
    return (
      <div className="card">
        <img src={this.product.image} alt="" />
        <div className="card-body">
          <h3>Product name {this.product.name}</h3>
          <p>price {this.product.price}</p>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    );
  };
  render() {
    let title = "Cybersoft";
    return (
      <div className="container">
        <h3>Title: {title}</h3>
        <h3>Sum: {this.tong2so(5, 10)}</h3>
        <div className="w-25">{this.renderProduct()}</div>
      </div>
    );
  }
}
