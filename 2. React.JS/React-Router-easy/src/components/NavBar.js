import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="index-link">Index</Link>
          </li>
          <li>
            <Link to="/home" className="home-link">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
