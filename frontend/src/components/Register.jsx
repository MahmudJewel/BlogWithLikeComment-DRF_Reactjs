import "../assets/register.css";
import { signup } from "../actions/root";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

const Register = ({signup, isAuthenticated}) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    username: "",
    password: "",
    re_password: "",
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
    if (formData.password === formData.re_password && formData.password !== '') {
      signup(formData.username, formData.email, formData.password);
      setAccountCreated(true);
    }
    
  };

  if (isAuthenticated) {
    return navigate('/')
}

if (accountCreated) {
  return navigate('/login')
}

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

              <div className="mb-4">
                <h5 className="text-start">Re-Password <span className="text-primary">*</span>: </h5>
                <input
                  className="form-control text-center"
                  type="password"
                  placeholder="Re-type Password"
                  name="re_password"
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

// export default Register;
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Register);
