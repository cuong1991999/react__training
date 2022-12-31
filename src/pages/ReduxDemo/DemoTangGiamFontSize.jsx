import React, { Component } from "react";
import { connect } from "react-redux";
class DemoTangGiamFontSize extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>vi du tang giam font size</h3>
        <p style={{ fontSize: this.props.fSize }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius atque
          similique corrupti tenetur. Vero, ullam dicta libero mollitia in
          officiis!
        </p>
        <button
          className="btn btn-success mx-2 "
          onClick={() => {
            //format data gui len redux (action)
            const action = {
              type: "TANG_GIAM_FONTSIZE",
              payload: 1, // du lieu gui len redux
            };

            // dung props.dispatch de dua action len redux
            this.props.dispatch(action);
          }}
        >
          +
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            //format data gui len redux (action)
            const action = {
              type: "TANG_GIAM_FONTSIZE",
              payload: -1, // du lieu gui len redux
            };

            // dung props.dispatch de dua action len redux
            this.props.dispatch(action);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
// return{} : tuong duong ()
const mapStateToProps = (state) => ({
  fSize: state.fontSize,
});

const ComponentRedux = connect(mapStateToProps)(DemoTangGiamFontSize);
export default ComponentRedux;
