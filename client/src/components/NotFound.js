import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../images/notfound.jpg";
import "../styles/NotFound.css";
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 Page Not found</h1>{" "}
      <img src={notFoundImage} alt="" className="notfoundimage" />
      <h2>
        <button className="backbutton">
          <Link to="/portal/home" style={{ textDecoration: "none" }}>
            Back to Home Page
          </Link>
        </button>
      </h2>
    </div>
  );
};

export default NotFound;
