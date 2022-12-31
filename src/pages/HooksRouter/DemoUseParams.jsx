import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const DemoUseParams = () => {
  const [prodDetail, setProdDetail] = useState({});
  const params = useParams();
  console.log(prodDetail);
  const getProductById = async (id) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET",
    });
    setProdDetail(result.data.content);
  };
  useEffect(() => {
    getProductById(params.id);
  }, [params.id]);
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-4">
          <img className="w-100" src={prodDetail.image} alt="..." />
        </div>
        <div className="col-8">
          <h3>{prodDetail.name}</h3>
          <p>{prodDetail.description}</p>
        </div>
      </div>
      <h3 className="text-center">related products</h3>
      <div className="row">
        {prodDetail.relatedProducts?.map((item) => {
          return (
            <div className="col-4" key={item.id}>
              <div className="card">
                <img src={item.image} alt="..." />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <NavLink
                    to={`/detail/${item.id}`}
                    className="btn btn-success"
                  >
                    View Detail
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

export default DemoUseParams;
