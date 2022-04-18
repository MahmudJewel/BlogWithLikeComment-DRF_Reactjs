import { useState, useEffect } from "react";

import axiosInstance from "../axios";
import { SingleBlog } from "./SingleBlog";
import "../assets/home.css";
import axios from "axios";

export const Home = () => {
  const [blogs, setblogs] = useState([]);

  const fetchData = async () => {
    let JWTToken = localStorage.getItem('access');
    // console.log('home access : ',JWTToken)
    const { data } = await axiosInstance.get(`blog/allblogs`);
    setblogs(data);
  };

  useEffect(() => {
    fetchData();
    // console.log(blogs.author)
  }, []);

  return (
    <div >
      <div className="home">
      {blogs &&
          blogs.map((item) => (
            <SingleBlog
              key={item.id}
              title={item.title}
              author={item.author.username}
              slug={item.slug}
            />
          ))}

      </div>
    </div>
  );
};
