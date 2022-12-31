import React, { Component } from "react";

export default class extends Component {
  render() {
    const { phone, xemChitiet } = this.props;
    return (
      <div className="card">
        <img
          src={phone.hinhAnh}
          alt=""
          height={350}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h4>{phone.tenSP}</h4>
          <p>{phone.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              xemChitiet(phone);
            }}
          >
            Xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}
