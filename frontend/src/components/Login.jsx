import React, { useState } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`auth/jwt/create`, {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
        navigate("/");
        //console.log(res);
        //console.log(res.data);
      });
  };

  return (
    <Container>
      <form>
        <div className="container d-flex justify-content-center py-5">
          <div className="card mt-4 col-md-8 shadow card-style">
            <div className="card-title mt-3 ">
              <h2 className="text-success text-center">Login </h2>
            </div>

            <div className="card-body col-md-8 m-auto">
              <div className="mb-4">
                <h5 className="text-start">Username: </h5>
                <input
                  className="form-control text-center"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <h5 className="text-start">Password: </h5>
                <input
                  className="form-control text-center"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="text-center">
                <button className="btn btn-success" 
                onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Login;
