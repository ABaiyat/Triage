import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          as={Link}
          to=""
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          as={Link}
          to="profile"
          onClick={this.handleItemClick}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          name="dashboard"
          active={activeItem === "dashboard"}
          as={Link}
          to="dashboard"
          onClick={this.handleItemClick}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          position="right"
          name="login"
          active={activeItem === "login"}
          as={Link}
          to="login"
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          as={Link}
          to="register"
          onClick={this.handleItemClick}
        >
          Register
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
