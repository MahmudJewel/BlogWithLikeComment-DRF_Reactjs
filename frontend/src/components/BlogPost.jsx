import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { blogpost } from "../actions/root";


const BlogPost = ({blogpost, isAuthenticated}) =>{
    const navigate = useNavigate();
  const initialFormData = Object.freeze({
    title: "",
    desc: "",
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
    blogpost(formData.title, formData.desc);
};

// if (isAuthenticated) {
//     return navigate("/")
//   }

    return(
        <form>
        <div className="container d-flex justify-content-center py-5">
          <div className="card mt-4 col-md-8 shadow card-style">
            <div className="card-title mt-3 ">
              <h2 className="text-success text-center">Create New Blog </h2>
            </div>

            <div className="card-body col-md-8 m-auto">
              <div className="mb-4">
                <h5 className="text-start">Title: </h5>
                <input
                  className="form-control text-center"
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                />
              </div>

              <div>
                <h5 className="text-start">Details: </h5>
                {/* <FloatingLabel controlId="floatingTextarea2" label="Comments"> */}
                <Form.Control
                    as="textarea"
                    placeholder="Enter Descriptions"
                    name="desc"
                    style={{ height: '200px' }}
                    onChange={handleChange}
                />
                {/* </FloatingLabel> */}
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
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { blogpost })(BlogPost);