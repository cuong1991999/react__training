import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";
const DemoUseSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);
  let keyword = searchParams.get("keyword");
  const frm = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setSearchParams({
        keyword: values.keyword,
      });
    },
  });
  const getProductByKeyword = async () => {
    try {
      if (keyword) {
        const result = await axios({
          url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
          method: "GET",
        });
        setArrProduct(result.data.content);
        console.log(result.data.content);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getProductByKeyword();
  }, [keyword]);
  return (
    <div className="container">
      <h3>search</h3>
      <form className="form-group" onSubmit={frm.handleSubmit}>
        <p>nhap ten san pham</p>
        <input
          type="text"
          name="keyword"
          className="form-control"
          onChange={frm.handleChange}
        />
        <button className="m-2 btn btn-success">Search</button>
      </form>
      <h3 className="m-2">ket qua tim kiem({arrProduct.length})</h3>
      <div className="row">
        {arrProduct.map((item) => {
          return (
            <div className="col-3" key={item.id}>
              <div className="card">
                <img src={item.image} alt="..." />
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <NavLink
                    to={`/detail/${item.id}`}
                    className="btn btn-success"
                  >
                    Viewdetail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoUseSearchParams;
