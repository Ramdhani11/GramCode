import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePostAsync, getPostsAsync } from "../redux/actions/postActions";
import { AiOutlineDelete, AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getPostsAsync());
  }, []);
  const deleteHander = (id) => {
    dispacth(deletePostAsync(id));
  };

  return (
    <>
      <div className="homepage">
        {posts.map((post) => {
          const { content, title, image, id } = post;
          return (
            <div className="card" key={id}>
              <div className="card-header">Profil</div>
              <img src={image} alt="" />
              <div className="card-content">
                <h4>{title}</h4>
                <small>
                  <p>{content}</p>
                </small>
                <span>2 Comments </span>
              </div>
              <div className="card-footer">
                <button className="delete" onClick={() => deleteHander(id)}>
                  <AiOutlineDelete />
                </button>
                <Link className="detail" to={`detail/${id}`}>
                  <AiOutlineSearch />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
