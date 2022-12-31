import React, { Component } from "react";

export default class FormCreateProduct extends Component {
  state = {
    values: {
      id: "",
      name: "",
      price: "",
      productType: "phone",
      image: "",
      description: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      image: "",
      description: "",
    },
    valid: false,
  };
  checkValid = () => {
    //form hop le khi value !== '' va error = ''

    // lay ra object value va error de duyet dieu kien hop le
    let { values, errors } = this.state;
    for (let key in errors) {
      if (errors[key] !== "" || values[key] == "") {
        return false;
      }
    }
    return true;
  };
  handleInputChange = (e) => {
    // let { id, value } = e.target;
    // this.setState({ [id]: value });
    // lay id va value cua the dang input
    let { value, id } = e.target;
    // name, price, ... tuy theo truong dang oninput la gi
    // attribute la thuoc tinh tu minh them vao the
    // let dataAttrRegex = e.target.getAttribute("data-regex");
    let type = e.target.getAttribute("data-type");
    // console.log(dataAttrRegex);
    // xu ly value
    let newValues = this.state.values;
    newValues[id] = value;
    // xu ly error
    let newErrors = this.state.errors;
    let messError = "";
    if (value.trim() == "") {
      messError = id + " cannot be blank";
    } else {
      //cach 1
      // if (dataAttrRegex) {
      //   let regex = new RegExp(dataAttrRegex);
      //   if (!regex.test(value)) {
      //     messError = id + " is invalid";
      //   }
      // }
      //cach 2
      if (type === "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messError = id + " is invalid";
        }
      }
    }
    newErrors[id] = messError;

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
        let valid = this.checkValid();
        this.setState({
          valid: valid,
        });
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); // chan su kien reload browser
    if (!this.checkValid()) {
      return;
    }
  };
  render() {
    return (
      <form action="" className="container" onSubmit={this.handleSubmit}>
        <h3>Create product</h3>
        <div className="card">
          <h3 className="card-header ">Product info</h3>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>id</p>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    className="form-control"
                    onInput={this.handleInputChange}
                  />
                  {this.state.errors.id !== "" && (
                    <div className="alert alert-danger mt-2">
                      {this.state.errors.id}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <p>name</p>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onInput={this.handleInputChange}
                  />
                  {this.state.errors.name !== "" ? (
                    <div className="alert-danger alert">
                      {this.state.errors.name}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <p>price</p>
                  <input
                    data-regex="^\d+$"
                    data-type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    onInput={this.handleInputChange}
                  />
                  <div className="text text-danger">
                    {this.state.errors.price}
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>image</p>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    className="form-control"
                    onInput={this.handleInputChange}
                  />
                  <div className="text text-danger">
                    {this.state.errors.image}
                  </div>
                </div>
                <div className="form-group">
                  <p>productType</p>
                  <select
                    className="form-control"
                    name="productType"
                    id="productType"
                    onInput={this.handleInputChange}
                  >
                    <option value="phone">phone</option>
                    <option value="table">table</option>
                    <option value="laptop">laptop</option>
                  </select>
                  <div className="text text-danger">
                    {this.state.errors.productType}
                  </div>
                </div>
                <div className="form-group">
                  <p>description</p>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    className="form-control"
                    onInput={this.handleInputChange}
                  />
                  <div className="text text-danger">
                    {this.state.errors.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              disabled={!this.state.valid}
              className="btn btn-success m-2"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    );
  }
}
