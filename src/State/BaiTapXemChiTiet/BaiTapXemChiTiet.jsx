import React, { Component } from "react";
import Phone from "./Phone";
const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];
export default class BaiTapXemChiTiet extends Component {
  state = {
    spChitiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  };
  renderProduct = () => {
    return data.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <Phone phone={phone} xemChitiet={this.xemChitiet} />
        </div>
      );
    });
  };
  xemChitiet = (phoneClick) => {
    this.setState({
      spChitiet: phoneClick,
    });
  };
  render() {
    const {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.spChitiet;
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()}</div>
        <div className="mt-2">
          <div className="row">
            <div className="col-4">
              <h3>{tenSP}</h3>
              <img
                src={hinhAnh}
                alt=""
                className="w-100"
                style={{ objectFit: "cover" }}
                height={350}
              />
            </div>
            <div className="col-8">
              <h3>Thong so ky thuat</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Man hinh</th>
                    <th>{manHinh}</th>
                  </tr>
                  <tr>
                    <th>He dieu hanh</th>
                    <th>{heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera truoc</th>
                    <th>{cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <th>{cameraSau}</th>
                  </tr>
                  <tr>
                    <th>Ram</th>
                    <th>{ram}</th>
                  </tr>
                  <tr>
                    <th>R0m</th>
                    <th>{rom}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
