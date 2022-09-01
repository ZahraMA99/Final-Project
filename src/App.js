import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      citiesInfo: [
        {
          CityimageSrc:
            "https://d13k13wj6adfdf.cloudfront.net/urban_areas/aarhus-67c2f42848.jpg",
          CityDetails: {
            continent: "Europe",
            FullName: "Aarhus, Denmark",
          },
        },
        {
          CityimageSrc:
            "https://d13k13wj6adfdf.cloudfront.net/urban_areas/adelaide-3b1b936db3.jpg",
          CityDetails: {
            continent: "Oceania",
            FullName: "Adelaide, Australia",
          },
        },
        {
          CityimageSrc:
            "https://d13k13wj6adfdf.cloudfront.net/urban_areas/albuquerque-f730c0301f.jpg",
          CityDetails: {
            continent: "North America",
            FullName: "Albuquerque, New Mexico",
          },
        },
        {
          CityimageSrc:
            "https://d13k13wj6adfdf.cloudfront.net/urban_areas/almaty-e6f7b165d0.jpg",
          CityDetails: {
            continent: "Asia",
            FullName: "Almaty, Kazakhstan",
          },
        },
        {
          CityimageSrc:
            "https://d13k13wj6adfdf.cloudfront.net/urban_areas/amsterdam-731a0d165a.jpg",
          CityDetails: {
            continent: "Europe",
            FullName: "Amsterdam, Netherlands",
          },
        },
        {
          CityimageSrc:
            "https://d13k13wj6adfdf.cloudfront.net/urban_areas/anchorage-a75ea8617c.jpg",
          CityDetails: {
            continent: "North America",
            FullName: "Anchorage, Alaska",
          },
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route
              exact
              path="/home"
              render={() => <HomePage citiesInfo={this.state.citiesInfo} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}
