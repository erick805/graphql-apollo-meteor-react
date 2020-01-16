import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

export default class ResolutionForm extends Component {
  submitForm = () => {
    console.log(this.name.value);
  };

  render() {
    return (
      <>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Submit</button>
      </>
    );
  }
}
