import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import GioHang from "./GioHang";

export default class BaiTapGioHang extends Component {
  state = {
    gioHang: [
      {
        maSP: 3,
        tenSP: "Iphone XS Max",
        giaBan: 27000000,
        hinhAnh: "./img/applephone.jpg",
        soLuong: 1,
      },
    ],
  };
  // state dat tai dau thi cac ham setState se viet tai component do
  xoaGioHang = (maSPCLick) => {
    // lay ra gio hang
    // let gioHang = this.state.gioHang;
    // let index = gioHang.findIndex((sp) => sp.maSP === maSPCLick);
    // tim thay
    // if (index !== -1) {
    //   gioHang.splice(index, 1);
    // }
    // cap nhat lai state
    this.setState({
      gioHang: this.state.gioHang.filter((sp) => sp.maSP !== maSPCLick),
    });
  };
  tangGiamSoLuong = (maSP, soluong) => {
    // xu ly state
    let gioHang = this.state.gioHang;
    let spGH = gioHang.find((sp) => sp.maSP === maSP);
    if (spGH) {
      spGH.soLuong += soluong;
      if (spGH.soLuong <= 0) {
        if (window.confirm("Ban co muon xoa san pham khong")) {
          this.xoaGioHang(maSP);
          return;
        }
        spGH.soLuong -= soluong;

        return;
      }
    }
    this.setState({
      gioHang: gioHang,
    });
  };
  themGioHang = (spClick) => {
    const spGioHang = { ...spClick, soLuong: 1 };

    // setState
    // Xu ly cap nhat state.gioHang khi Click
    let gioHang = this.state.gioHang;

    // Kiem tra sp vua click da co trong gio hang hay chua
    // find tra ve object trong mang
    let spCheck = gioHang.find((sp) => sp.maSP === spClick.maSP);
    if (spCheck) {
      spCheck.soLuong = spCheck.soLuong + 1;
    } else {
      gioHang.push(spGioHang);
    }

    this.setState({
      gioHang: gioHang,
    });
  };

  render() {
    return (
      <div className="container">
        <GioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <DanhSachSanPham themGioHang={this.themGioHang} />
      </div>
    );
  }
}
