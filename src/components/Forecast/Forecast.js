import React, { Component } from "react";
import "./Forecast.css";
import Day from "../Day/Day";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: [],
    };
    this.days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/evyros/react-weather-app/forecast"
    )
      .then((data) => data.json())
      .then((forecastData) => {
        this.setState({ forecastData });
      });
  }

  render() {
    return (
      <div className="Forecast">
        {this.state.forecastData.map((OneDayForecast) => {
          return (
            <Day
              key={OneDayForecast.day}
              day={this.days[OneDayForecast.day]}
              temperature={OneDayForecast.temperature}
              icon={OneDayForecast.icon}
              description={OneDayForecast.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Forecast;
