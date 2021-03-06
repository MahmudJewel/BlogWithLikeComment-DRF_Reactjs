import axiosInstance from "../axios";
import { singleBlogData, removeSingleBlogData } from "../actions/root";
import { CommentsView } from "./CommentsView";
import { Commenting } from "./Commenting";
// import Commenting from "./Commenting";
// import { Liked } from "../actions/root";

import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const BlogWithDetails = () => {
  const singleBlog = useSelector((state) => state.blog);
  const pk = singleBlog.id;
  const liked_array = singleBlog.likes

  console.log("blogdetails: ", liked_array);
  const { slug } = useParams();
  const dispatch = useDispatch();

  // var urll = "/blog/"+ slug
  // console.log(urll)
  // fetching single blog
  const fetchData = async () => {
    try {
      await axiosInstance.get(`blog/${slug}`).then((resp) => {
        dispatch(singleBlogData(resp.data));
        // console.log("From blogwithdetails: ", singleBlog);
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

  const like_unlike = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization:'Bearer ' + localStorage.getItem('access'),
        "Content-Type": "application/json",
      },
    };
    // Liked(pk);
    axiosInstance.patch(`blog/all/${pk}/`, null, config );
    window.location.reload();
    // navigate("/");
  };

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
              <p>Author: {singleBlog.author.username}</p>
              <p>Updated at: {singleBlog.updated}</p>
            </div>
            <div className="row">
              <div className="col">{singleBlog.desc}</div>
            </div>
            <br /> <br />
            {/* <form action=""> */}
            <div className="row mt-3 pt-3">
              <div className="col">
                <Button className="me-2" onClick={like_unlike}>
                  Like
                </Button>
                <b>total likes: {Object.keys(singleBlog.likes).length}</b>
              </div>
            </div>
            {/* </form> */}
          </div>

          {/* comments sections  */}
          <br />

          <Commenting blogID={singleBlog.id} slug={slug} />

          <br />
          {singleBlog.blog_comment &&
            singleBlog.blog_comment.map((comment) => (
              <CommentsView comment={comment} key={comment.id} />
            ))}
        </div>
      )}
    </Container>
  );
};
