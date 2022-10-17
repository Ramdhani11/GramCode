import axios from "axios";
import { useParams } from "react-router-dom";
import { GET_POSTS, CREATE_POST, DELETE_POST } from "../reducers/postSlice";

const URL = "https://633d4c8df2b0e623dc70a5c0.mockapi.io/v1/posts";

const getPostsAsync = () => {
  return async (dispacth) => {
    try {
      const posts = await axios({
        method: "get",
        url: URL,
      });
      dispacth(GET_POSTS(posts.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const createPostAsync = (data) => {
  return async (dispacth) => {
    try {
      let result = await axios({
        method: "post",
        url: URL,
        data: data,
      });
      dispacth(CREATE_POST(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const deletePostAsync = (data) => {
  return async (dispacth) => {
    try {
      let result = await axios({
        method: "delete",
        url: `${URL}/${data}`,
      });
      dispacth(DELETE_POST(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const updatePostAsync = (id, data) => {};

export { getPostsAsync, createPostAsync, deletePostAsync, updatePostAsync };
