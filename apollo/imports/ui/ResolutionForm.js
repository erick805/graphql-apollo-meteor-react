import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;
class ResolutionForm extends Component {
  submitForm = () => {
    const { createResolution } = this.props;

    createResolution({
      variables: {
        name: this.name.value
      }
    }).catch(err => console.error("Resolution Form Submit Error: ", err));
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

export default graphql(createResolution, {
  name: "createResolution",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(ResolutionForm);
