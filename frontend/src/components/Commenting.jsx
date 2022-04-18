import { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { CommentByUser } from "../actions/root";
import { connect } from "react-redux";
import axiosInstance from "../axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router";

export const Commenting = ({blogID, slug}) => {
    const navigate = useNavigate();
    // var urll = "/blog/"+ slug
    // console.log('commenting: ',urll)
  const initialFormData = Object.freeze({
    comment: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const postingComment =async (comment)=>{
    if (localStorage.getItem("access")){
        console.log('commenting: ', comment)
        var token = localStorage.getItem("access");
        var decoded = jwt_decode(token);
        const config = {
            headers: {
              Authorization:'Bearer ' + localStorage.getItem('access'),
              "Content-Type": "application/json",
            },
          };
        var author = decoded.user_id;
        var blog = blogID
        const body = JSON.stringify({ author, blog, comment });
        console.log('json', body)
        try {
            const res = await axiosInstance.post(`blog/comment/`, body, config);
                console.log(res)
                // var urll = "/blog/"+ slug
                // console.log('try: ',urll)
                window.location.reload();
                // navigate(urll)
          } catch (err) {
            console.log(err)
          }
    }
    else{
        console.log("commenting fail")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    console.log(blogID);
    // CommentByUser(formData.comment, blogID);
    postingComment(formData.comment);
  };

  return (
    <form>
      <div className="container d-flex justify-content-center py-5">
        <div className="card mt-4 col-md-8 shadow card-style">

          <div className="card-body col-md-8 m-auto">

            <div>
              {/* <FloatingLabel controlId="floatingTextarea2" label="Comments"> */}
              <Form.Control
                as="textarea"
                placeholder="Comments your valuable opinion"
                name="comment"
                style={{ height: "200px" }}
                onChange={handleChange}
              />
              {/* </FloatingLabel> */}
            </div>
                <br />
            <div className="text-center">
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
//   });
  
//   export default connect(mapStateToProps, { CommentByUser })(Commenting);
