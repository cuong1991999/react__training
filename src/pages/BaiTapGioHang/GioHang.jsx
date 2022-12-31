import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div>
        <div className="card">
          <div className="card-header">Gio Hang</div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Ma sp</th>
                  <th>Hinh Anh</th>
                  <th>Ten san pham</th>
                  <th>Gia ban</th>
                  <th>So luong</th>
                  <th>Thanh tien</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {gioHang.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.maSP}</td>
                      <td>
                        <img src={item.hinhAnh} width={50} height={50} alt="" />
                      </td>
                      <td>{item.tenSP}</td>
                      <td>{item.giaBan}</td>
                      <td>
                        <button
                          className="btn btn-dark mx-2"
                          onClick={() => {
                            tangGiamSoLuong(item.maSP, 1);
                          }}
                        >
                          +
                        </button>
                        {item.soLuong}
                        <button
                          className="btn btn-dark mx-2"
                          onClick={() => {
                            tangGiamSoLuong(item.maSP, -1);
                          }}
                        >
                          -
                        </button>
                      </td>
                      <td>{item.giaBan * item.soLuong}</td>
                      <td>
                        <button
                          className="btn btn-danger "
                          onClick={() => {
                            xoaGioHang(item.maSP);
                          }}
                        >
                          Xoa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
