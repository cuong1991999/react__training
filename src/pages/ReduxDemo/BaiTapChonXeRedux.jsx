// rcredux => xoa chu export va xoa ham mapDispatchToProps
import React, { Component } from "react";
import { connect } from "react-redux";

class BaiTapChonXeRedux extends Component {
  handleChangeColor = (color) => {
    let newImgSrc = `./img/${color}-car.jpg`;
    const action = {
      type: "CHANGE_COLOR",
      payload: newImgSrc,
    };
    this.props.dispatch(action);
  };
  render() {
    let { imgSrc } = this.props;
    return (
      <div>
        <hr />
        <h3>bai tap chon xe hoi</h3>
        <div className="row">
          <div className="col-6">
            <img src={imgSrc} alt="" className="w-100" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger mx-2"
              onClick={() => this.handleChangeColor("red")}
            >
              red
            </button>
            <button
              className="btn btn-secondary mx-2"
              onClick={() => this.handleChangeColor("steel")}
            >
              steel
            </button>
            <button
              className="btn btn-dark mx-2"
              onClick={() => this.handleChangeColor("black")}
            >
              black
            </button>
            <button
              className="btn btn-primary mx-2"
              onClick={() => this.handleChangeColor("silver")}
            >
              silver
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imgSrc: state.imgSrc,
});

export default connect(mapStateToProps)(BaiTapChonXeRedux);
