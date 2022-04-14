import axiosInstance from "../axios";

import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

export const BlogWithDetails = () => {
  const { slug } = useParams();
  const [blog, setblog] = useState([]);

  const fetchData = async () => {
    const { data } = await axiosInstance.get(`blog/${slug}`);
    setblog(data);
    console.log("single blog: ", data);
  };

  useEffect(() => {
    fetchData();
    // console.log('length: ', blogs.length)
  }, []);

  return (
      <Container>
          <div className="row">
              <div className="col">
                  <h2>{blog.title}</h2> <br />
                  {/* <p>Topic: {blog.category.title}</p> */}
                  <p>updated: {blog.updated}</p>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  {blog.desc}
              </div>
          </div>
      </Container>
  );
};
