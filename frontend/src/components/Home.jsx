import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

import axiosInstance from "../axios";
import { SingleBlog } from "./SingleBlog";
import "../assets/home.css";

export const Home = () => {
  const [blogs, setblogs] = useState([]);

  const fetchData = async () => {
    const { data } = await axiosInstance.get(`blog/allblogs`);
    setblogs(data);
    console.log("all blogs: ", data);
  };

  useEffect(() => {
    fetchData();
    // console.log('length: ', blogs.length)
  }, []);

  return (
    <div >
      <div className="home">
      {blogs &&
          blogs.map((item) => (
            <SingleBlog
              key={item.id}
              title={item.title}
              category={item.category}
              slug={item.slug}
            />
          ))}

      </div>
    </div>
  );
};
