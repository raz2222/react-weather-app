import React from "react";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React weather App</h1>
        <Forecast />
      </div>
    );
  }
}

export default App;
