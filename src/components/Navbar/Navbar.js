import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  filterCities = (e) => {
    this.props.filterCities(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="nav">
          <NavLink to="/home" activeStyle className="logo">
            LOGO
          </NavLink>
          <div>
            <input
              type="text"
              placeholder=" Search City"
              onChange={this.filterCities}
            ></input>
            {/* <button > Search </button> */}
          </div>
        </div>
      </div>
    );
  }
}
