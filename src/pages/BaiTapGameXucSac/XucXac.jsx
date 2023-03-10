import React, { Component } from "react";
import { connect } from "react-redux";
import { datCuocAction } from "../../redux/actions/baiTapGameAction";

class XucXac extends Component {
  renderKetQua = () => {
    const { arrXucXac } = this.props;
    let diem = 0;
    for (let xx of arrXucXac) {
      diem += xx.diem;
    }
    let ketQua = diem > 11 ? "Tài" : "Xỉu";
    return `${diem} điểm -${ketQua}`;
  };
  render() {
    console.log(this.props);
    const { arrXucXac } = this.props;
    return (
      <div className="container">
        <div className="row text-center pt-5">
          <div className="col-4">
            <button
              className="btn"
              onClick={() => {
                const action = datCuocAction(true);
                this.props.dispatch(action);
              }}
            >
              <div className="p-5 bg-danger text-white rounded display-4">
                Tài
              </div>
            </button>
          </div>
          <div className="col-4">
            {arrXucXac.map((xucXac, index) => {
              return (
                <img
                  key={index}
                  src={xucXac.img}
                  alt="..."
                  width={50}
                  height={50}
                  className="mr-2"
                />
              );
            })}
            {/* <img src="./img/1.png" alt="..." width={50} height={50} />
            <img src="./img/1.png" alt="..." width={50} height={50} />
            <img src="./img/1.png" alt="..." width={50} height={50} /> */}
            <div className="display-4 pt-5 text-light">
              {this.renderKetQua()}
            </div>
          </div>
          <div className="col-4">
            <button
              className="btn"
              onClick={() => {
                const action = datCuocAction(false);
                this.props.dispatch(action);
              }}
            >
              <div className="p-5 bg-danger text-white rounded display-4">
                Xỉu
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrXucXac: state.baiTapGameReducer.arrXucXac,
});

export default connect(mapStateToProps)(XucXac);
