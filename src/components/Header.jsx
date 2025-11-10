import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1>Customer Support AI</h1>
      <nav>
        <Link to="/" className="nav-link">
          New Query?
        </Link>
        <Link to="/history" className="nav-link">
          Past Conversations
        </Link>
      </nav>
    </header>
  );
};

export default Header;
