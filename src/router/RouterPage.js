import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreatePost, DetailPost, Home } from "../pages";

const RouterPage = () => {
  return (
    <div className="maincontent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<DetailPost />}>
          <Route path=":id" element={<DetailPost />} />
        </Route>
        <Route path="addpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
