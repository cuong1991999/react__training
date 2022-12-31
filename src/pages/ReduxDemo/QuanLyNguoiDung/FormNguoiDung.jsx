import React, { Component } from "react";
import { connect } from "react-redux";

class FormNguoiDung extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let taiKhoan = document.querySelector("#taiKhoan").value;
    let matKhau = document.querySelector("#matKhau").value;
    const action = {
      type: "THEM_NGUOI_DUNG",
      payload: { taiKhoan, matKhau },
    };
    this.props.dispatch(action);
  };
  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header">
          <h3>thong tin nguoi dung</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <p>tai khoan</p>
            <input
              type="text"
              name="taiKhoan"
              id="taiKhoan"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <p>mat khau</p>
            <input
              type="text"
              name="matKhau"
              id="matKhau"
              className="form-control"
            />
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success m-2" type="submit">
            them nguoi dung
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(FormNguoiDung);
