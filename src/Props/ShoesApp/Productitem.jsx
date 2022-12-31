import React, { Component } from "react";

export default class extends Component {
  render() {
    const { name, description, image, price } = this.props.prod;
    return (
      <div className="card ">
        <img src={image} alt="" />
        <div className="card-body">
          <h4>{name.length > 10 ? name.substring(0, 15) + "..." : name}</h4>
          <p className="my-2">{price}$</p>
          <p className="m-0">
            {description.length > 100
              ? description.substring(0, 100) + "..."
              : description}
          </p>
          <button className="mt-2 btn btn-success">Add to cart</button>
        </div>
      </div>
    );
  }
}
