import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
const DemoUseNavigate = () => {
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank!")
        .email("email is invalid"),
      password: yup.string().required("password cannot be blank!"),
      //   password: yup.string().required("password cannot be blank!").test('regex','tenloi'),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (
        values.email === "cybersoft@gmail.com" &&
        values.password === "cybersoft"
      ) {
        navigate("/baitapgamexucxac");
      } else {
        alert("email/password incorect !");
      }
    },
  });
  //   const [userlogin, setUserLogin] = useState({
  //     username: "",
  //     password: "",
  //   });

  const navigate = useNavigate();
  //   const handleChange = (e) => {
  //     const { value, name } = e.target;
  //     setUserLogin({
  //       ...userlogin,
  //       [name]: value,
  //     });
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (
  //       userlogin.username == "cybersoft" &&
  //       userlogin.password == "cybersoft"
  //     ) {
  //       navigate("/baitapgamexucxac");
  //     } else {
  //       alert("tk mk khong dung");
  //     }
  //   };
  return (
    <form className="container" onSubmit={frmLogin.handleSubmit}>
      <h3>login</h3>
      <div className="form-group">
        <p>email</p>
        <input
          type="text"
          className="form-control"
          onBlur={frmLogin.handleBlur}
          name="email"
          onChange={frmLogin.handleChange}
        />
        {frmLogin.errors.email && (
          <div className="alert alert-danger">{frmLogin.errors.email}</div>
        )}
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          type="text"
          className="form-control"
          name="password"
          onBlur={frmLogin.handleBlur}
          onChange={frmLogin.handleChange}
        />
        {frmLogin.errors.password && (
          <div className="alert alert-danger">{frmLogin.errors.password}</div>
        )}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          login
        </button>
      </div>
    </form>
  );
};

export default DemoUseNavigate;
