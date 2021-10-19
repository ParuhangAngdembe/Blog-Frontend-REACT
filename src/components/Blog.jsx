import React from "react";
import Card from "./Card";

import { useState } from "react";
import { API_URL } from "../url/NewsUrl";
import { useEffect } from "react";
// import Spinner from "react-bootstrap";
const Blog = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [BlogData, SetBlogData] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(API_URL);
    const items = await data.json();
    console.log(items);
    SetBlogData(items);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Read My Blogs</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card data={BlogData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
