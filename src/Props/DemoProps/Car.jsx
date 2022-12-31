import React, { Component } from "react";

export default class Car extends Component {
  render() {
    /*
    Khác biệt giữa this.state && this.props
    Giống: điều là thuộc tính có sẵn từ react class component. dùng dể binding dữ liệu lên giao diện
    Khác nhau: state dùng dể chứa dữ liệu thay đổi trên giao diện và có thể gán lại được thông qua phương thức setState.
    Props dùng để nhận dữ liệu từ component cha truyền vào và không được gán lại giá trị dó
    */
    const { img, name, id, price } = this.props.prod;
    return (
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body bg-dark text-white">
          <h3>{name}</h3>
          <p>{price}$</p>
        </div>
      </div>
    );
  }
}
