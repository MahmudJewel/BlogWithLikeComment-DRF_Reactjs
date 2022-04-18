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
    const { data } = await axiosInstance.get(`blog/allblogs`, { headers: {"Authorization" : `Bearer ${JWTToken}`} });
    setblogs(data);
  };

  useEffect(() => {
    fetchData();
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
