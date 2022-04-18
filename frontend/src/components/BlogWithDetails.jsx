import axiosInstance from "../axios";
import { singleBlogData, removeSingleBlogData } from "../actions/root";
import { CommentsView } from "./CommentsView";
import { Commenting } from "./Commenting";
// import Commenting from "./Commenting";

import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const BlogWithDetails = () => {
  const singleBlog = useSelector((state) => state.blog);
  const { slug } = useParams();
  const dispatch = useDispatch();
  
  // var urll = "/blog/"+ slug
  // console.log(urll)
  // fetching single blog
  const fetchData = async () => {
    try {
      await axiosInstance.get(`blog/${slug}`).then((resp) => {
        dispatch(singleBlogData(resp.data));
        console.log("From blogwithdetails: ", singleBlog);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (slug && slug !== "") {
      fetchData();
    }

    return () => {
      dispatch(removeSingleBlogData());
    };
  }, [slug]);

  return (
    <Container>
      {Object.keys(singleBlog).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          {/* details view  */}
          <div className="row">
            <div className="col">
              <h2>{singleBlog.title}</h2> <br />
              id: {singleBlog.id} <br />
              <p>Topic: {singleBlog.category.title}</p>
              <p>updated: {singleBlog.updated}</p>
            </div>
            <div className="row">
              <div className="col">{singleBlog.desc}</div>
            </div>
            <div className="row">
              <div className="col">
                <Button className="me-2">Like</Button>
                <b>total likes: {Object.keys(singleBlog.likes).length}</b>
              </div>
            </div>
          </div>

          {/* comments sections  */}
          <br />
          <div className='card'>
            COMMENT SECTIONS:
          </div>

              <Commenting blogID={singleBlog.id} slug={slug}/>

          <br />
          {singleBlog.blog_comment &&
            singleBlog.blog_comment.map((comment) => <CommentsView comment={comment} key={comment.id}/>)}
        </div>
      )}
    </Container>
  );
};
