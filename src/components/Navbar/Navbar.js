import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          {/* <FaBeer className="fabeer" /> */}
          <NavLink to="/home" activeStyle className="logo">
            LOGO
          </NavLink>
          {/* Search Method */}
        </div>
      </div>
    );
  }
}
