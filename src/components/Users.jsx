import React, { Component } from "react";
import User from "./User";

import styles from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: "Test",
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided");
    }
  }

  toggleUserHandler() {
    this.setState((cur) => {
      return { showUsers: !cur.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((item) => (
          <User key={item.id} name={item.name} />
        ))}
      </ul>
    );

    return (
      <div className={styles.users}>
        <button onClick={this.toggleUserHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
export default Users;
