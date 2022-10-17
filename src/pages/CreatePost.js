import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createPostAsync } from "../redux/actions/postActions";

const CreatePost = () => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    let fromPost = {
      title,
      content,
      image,
    };
    dispacth(createPostAsync(fromPost));
    console.log(fromPost);
    setContent("");
    setImage("");
    setTitle("");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "New Post succes",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <>
      <div className="create-post">
        <div className="card">
          <div className="card-header">Create new post</div>
          <form className="card-content" onSubmit={submithandler}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name=""
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label htmlFor="des" className="des">
              Content
            </label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              name=""
              id="des"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="img">Image</label>
            <input
              placeholder="http://loremflickr.com/640/480/city"
              type="text"
              name=""
              id="img"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <button>Post</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
