import React, { Component } from "react";
import { connect } from "react-redux";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import "./BaiTapGameXucSac.css";
class BaiTapGameXucSac extends Component {
  render() {
    return (
      <div className=" bg-game">
        <h3 className="text-center pt-5 display-4">Game Tài Xỉu</h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapGameXucSac);
