import React from "react";
import { AiOutlineHome, AiOutlinePaperClip } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h4>Gramcode</h4>
      </div>
      <div className="sub-menu">
        <ul>
          <li>
            <AiOutlineHome size={25} />
            <Link to="/">Home</Link>
          </li>
          <li>
            <BsPlusSquare size={25} />
            <Link to="addpost">Create</Link>
          </li>
          <li>
            <AiOutlinePaperClip size={25} />
            <a href="">Feeds</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
