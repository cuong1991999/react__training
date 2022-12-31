import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
const product = [
  { id: 1, name: "red car", img: "./img/red-car.jpg", price: 1000 },
  { id: 2, name: "black car", img: "./img/black-car.jpg", price: 2000 },
  { id: 3, name: "silver car", img: "./img/silver-car.jpg", price: 3000 },
  { id: 4, name: "steel car", img: "./img/steel-car.jpg", price: 4000 },
];
export default class ExerciseCarStone extends Component {
  state = {
    producDetail: {
      id: 1,
      name: "red car",
      img: "./img/red-car.jpg",
      price: 1000,
    },
  };
  //this.state đặt tại component nào thì hàm setState sẽ được định nghĩa tại component đó
  viewDetail = (producClick) => {
    this.setState({
      producDetail: producClick,
    });
  };
  render() {
    return (
      <div className="container">
        <ProductList data={product} viewDetail={this.viewDetail} />
        <Modal prodDetail={this.state.producDetail} />
      </div>
    );
  }
}
