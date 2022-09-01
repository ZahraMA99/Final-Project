import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    const citiesInfo = this.props.citiesInfo;

    return (
      <div>
        <Navbar />
        <Sidebar />
        <div className="cityImage">
          {citiesInfo.map((cityImage) => {
            return <img src={cityImage.CityimageSrc} alt="" />;
          })}
        </div>
      </div>
    );
  }
}
