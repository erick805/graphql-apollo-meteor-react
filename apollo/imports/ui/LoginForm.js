import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class LoginForm extends Component {
  login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, err => {
      console.error("User Login Error: ", err);
      if (!err) {
        this.props.client.resetStore();
      }
    });
  };
  render() {
    return (
      <form onSubmit={this.login}>
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
        <button type="submit">Login User</button>
      </form>
    );
  }
}
