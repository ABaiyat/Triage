import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginContainer from "./components/Login/LoginContainer.js";
import RegisterContainer from "./components/Register/RegisterContainer.js";
import NavigationContainer from "./components/Navigation/NavigationContainer.js";
import DashboardContainer from "./components/Dashboard/DashboardContainer.js";
import ProfileContainer from "./components/Profile/ProfileContainer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/register" component={RegisterContainer} />
              <Route exact path="/dashboard" component={DashboardContainer} />
              <Route exact path="/profile" component={ProfileContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
