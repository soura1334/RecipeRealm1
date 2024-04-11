import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [side, setSide] = useState(false);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <div
        className={`${side ? "cover" : ""}`}
        onClick={(e) => {
          setSide(false);
        }}
      >
        <div className={`side ${side ? "" : "hide-side"}`}>
          <ul>
          <Link to="/profile"><li>
              <img src="" alt="" />
            </li></Link>
            <Link to="/profile"><li>Your Profile</li></Link>
            <li>Your Favorites</li>
          </ul>
        </div>
      </div>
      <nav className={`Container ${sticky ? "dark-nav" : ""}`}>
        <img
          src={logo}
          alt=""
          onClick={() => {
            side ? setSide(false) : setSide(true);
          }}
        />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
