import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const UseEffectDemo = () => {
  const [number, setNumber] = useState(1);
  const [arrProduct, setArrProduct] = useState([]);
  useEffect(() => {
    //truong hop 1: khong co tham so dependency. luon thuc thi sau moi lan render => it su dung
    console.log("Thuc thi sau khi render");
  });
  useEffect(() => {
    console.log("Thuc thi sau khi render1");

    //truong hop 2 co tham so thu 2 la dependency [], chi thuc thi 1 lan duy nhat sau lan render dau tien cua component(giong componentDidMount) =>thuong dung de call cac apt get all;
    // getAllProduct();
  }, []);
  const getAllProduct = async () => {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    setArrProduct(result.data.content);
  };
  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <hr />
      <h3>Product list</h3>
      <div className="row">
        {arrProduct.map((prod, index) => {
          return (
            <div className="col-4 mt-2" key={prod.id}>
              <div className="card">
                <img src={prod.image} alt="..." />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectDemo;
