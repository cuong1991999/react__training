import React, { Component } from "react";
import { connect } from "react-redux";

export class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="display-4">
          <span>Bạn đặt cược:</span>{" "}
          <span className="text-danger">
            {this.props.diemCuoc ? "Tài" : "Xỉu"}
          </span>
        </div>
        <div className="display-4">
          <span>Tổng số bàn thắng:</span>
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          <span>Tổng số bàn cược:</span>
          <span className="text-warning">{this.props.soLanCuoc}</span>
        </div>
        <div className="display-4">
          <button
            className="btn btn-success p-3"
            onClick={() => {
              const action = {
                type: "PLAY_GAME",
              };
              this.props.dispatch(action);
            }}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diemCuoc: state.baiTapGameReducer.diemCuoc,
  soLanCuoc: state.baiTapGameReducer.soLanCuoc,
  soBanThang: state.baiTapGameReducer.soBanThang,
});

export default connect(mapStateToProps)(KetQuaTroChoi);
