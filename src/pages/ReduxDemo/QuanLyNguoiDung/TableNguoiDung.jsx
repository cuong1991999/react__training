import React, { Component } from "react";
import { connect } from "react-redux";

class TableNguoiDung extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Tai khoan</th>
            <th>Mat khau</th>
          </tr>
        </thead>
        <tbody>
          {this.props.arrNguoiDungReducer.map((nd, index) => {
            return (
              <tr key={index}>
                <th>{nd.taiKhoan}</th>
                <th>{nd.matKhau}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  arrNguoiDungReducer: state.arrNguoiDungReducer,
});

export default connect(mapStateToProps)(TableNguoiDung);
