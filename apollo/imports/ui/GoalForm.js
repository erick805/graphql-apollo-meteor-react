import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;

class GoalForm extends Component {
  submitForm = () => {
    const { createGoal, resolutionId } = this.props;

    createGoal({
      variables: {
        name: this.name.value,
        resolutionId
      }
    }).catch(err => console.error("Goal Form Submit Error: ", err));
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

export default graphql(createGoal, {
  name: "createGoal"
})(GoalForm);
