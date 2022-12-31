import React, { Component } from "react";
import ExRenderFilms from "../../RenderList/ExRenderFilms";
import BaiTapXemChiTiet from "../../State/BaiTapXemChiTiet/BaiTapXemChiTiet";
import ExerciseCarStone from "../ExerciseCarStone/ExerciseCarStone";
import ChildrentComponent from "./ChildrentComponent";

export default class DemoChildrenProps extends Component {
  render() {
    return (
      <div className="container">
        <ChildrentComponent>
          <ExerciseCarStone />
          <BaiTapXemChiTiet />
        </ChildrentComponent>
      </div>
    );
  }
}
