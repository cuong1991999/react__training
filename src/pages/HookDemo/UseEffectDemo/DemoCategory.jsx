import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const DemoCategory = () => {
  const [arrCategory, setArrCategory] = useState([]);
  const [arrProduct, setArrProduct] = useState([]);
  const [categoryId, setCategoryId] = useState([null]);

  const getAllCategoryApi = async () => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product/getAllCategory",
      method: "GET",
    });
    setArrCategory(result.data.content);
  };
  useEffect(() => {
    getAllCategoryApi();
    return () => {};
  }, []);
  const getProductByCateloryId = async (id) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${id}`,
      method: "GET",
    });
    setArrProduct(result.data.content);
  };
  useEffect(() => {
    if (categoryId) {
      getProductByCateloryId(categoryId);
    }
  }, [categoryId]);
  return (
    <div className="mt-5 container m-0">
      <div className="row ">
        <div className="col-3">
          <h3>Product Catelogy</h3>
          <nav className="d-flex flex-column">
            {arrCategory.map((item) => {
              return (
                <a
                  href="#"
                  className="mt-2 nav-link"
                  key={item.id}
                  onClick={() => {
                    setCategoryId(item.id);
                  }}
                >
                  {item.category}
                </a>
              );
            })}
          </nav>
        </div>
        <div className="col-9">
          <h3>Product list</h3>
          <div className="row">
            {arrProduct.map((prod) => {
              return (
                <div className="col-4 mb-4" key={prod.id}>
                  <div className="card">
                    <img src={prod.image} alt="..." />
                    <div className="card-body">
                      <h3>{prod.name}</h3>
                      <p>{prod.price}$</p>
                      <button className="btn btn-danger">
                        <i className="fa fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCategory;
