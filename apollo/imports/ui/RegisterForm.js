import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class RegisterForm extends Component {
  registerUser = e => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value
      },
      err => {
        if (!err) {
          this.props.client.resetStore();
        }
        console.error("User Registration Error: ", err);
      }
    );
  };
  render() {
    return (
      <form onSubmit={this.registerUser}>
        <input
          type="email"
          placeholder="email"
          ref={input => (this.email = input)}
        />
        <input
          type="password"
          placeholder="password"
          ref={input => (this.password = input)}
        />
        <button type="submit">Register User</button>
      </form>
    );
  }
}
