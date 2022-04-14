import "../assets/register.css";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// bootstrap
import { Container } from "react-bootstrap";

const Register = () => {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`auth/add-user`, {
        email: formData.email,
        username: formData.username,
        password: formData.password,
      })
      .then((res) => {
        navigate("/login");
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <Container>
      <form>
        <div className="container d-flex justify-content-center py-5">
          <div className="card mt-4 col-md-8 shadow card-style">
            <div className="card-title mt-3 ">
              <h2 className="text-success text-center">Sign-up Form </h2>
            </div>

            <div className="card-body col-md-8 m-auto">
              <div className="mb-4">
                <h5 className="text-start">Username<span className="text-primary">*</span>: </h5>
                <input
                  className="form-control text-center"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <h5 className="text-start">Email: </h5>
                <input
                  className="form-control text-center"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <h5 className="text-start">Password <span className="text-primary">*</span>: </h5>
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

export default Register;
