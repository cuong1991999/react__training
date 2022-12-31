import React, { Component } from "react";
import axios from "axios";
export default class ProductFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      categories: [],
    };
  }
  fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      this.setState({ categories: response.data });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchCategories();
  }
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="mb-3 input-group">
          <input
            placeholder="Search product..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
            className="form-control"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.props.onSearch(this.state.searchTerm)}
            >
              Search
            </button>
          </div>
        </div>
        <div className="mb-3">
          <select
            name=""
            id=""
            className="form-control"
            onChange={(e) => this.props.onChangeCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {this.state.categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}
