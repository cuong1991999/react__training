import React from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch(
    "https://shop.cyberlearn.vn/api/Product"
  );
  return (
    <div className="container">
      <div className="loading" style={{ display: loading ? "flex" : "none" }}>
        <div className="display-4">Loading...</div>
      </div>
      <h3>product list</h3>
      <div className="row">
        {data?.content.map((item) => {
          return (
            <div className="col-4 mt-2" key={item.id}>
              <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <NavLink
                    to={`/detail/${item.id}`}
                    className="btn btn-success"
                  >
                    ViewDetail
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

export default Home;
