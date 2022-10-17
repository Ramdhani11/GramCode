import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailPost = () => {
  const params = useParams();
  const [post, setPost] = useState([]);
  const URL = "https://633d4c8df2b0e623dc70a5c0.mockapi.io/v1/posts";

  const getOnlyPost = async (cb) => {
    try {
      let result = await axios({
        method: "get",
        url: `${URL}/${params.id}`,
      });
      cb(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOnlyPost((result) => {
      setPost(result);
    });
    console.log(post);
  }, []);

  return (
    <div className="detail-card">
      <div className="card">
        <div className="card-header">Detail Post</div>
        <div className="card-content">
          <img src={post.image} alt="" />
          <h4>{post.title}</h4>
          <p>
            <small>{post.content}</small>
          </p>
        </div>
        <div className="card-footer">
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
