import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    fz: 16, //state default
    img: "http://i.pravarar.cc",
  };
  render() {
    return (
      <div className="container">
        <h3>Tăng giảm fontSize</h3>
        <p style={{ fontSize: `${this.state.fz}px` }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          magni ex placeat explicabo possimus aut id hic accusamus, delectus
          ratione, quam suscipit? Fugiat sint cupiditate perspiciatis ea, culpa
          magni assumenda?s
        </p>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            this.setState({
              fz: this.state.fz + 5,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            this.setState({
              fz: this.state.fz - 5,
            });
          }}
        >
          -
        </button>
        <hr />
        <div className="card w-25">
          <img src={this.state.img} alt="" />
          <div className="card-body">
            <button
              className="btn btn-success"
              onClick={() => {
                let randomNumber = Math.floor(Math.random() * 100);
                let newImgSrc = "http://i.pravatar.cc?u=" + randomNumber;
                this.setState({
                  img: newImgSrc,
                });
              }}
            >
              Random
            </button>
          </div>
        </div>
      </div>
    );
  }
}
