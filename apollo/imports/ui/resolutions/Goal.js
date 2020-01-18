import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Goal extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        {this.props.goal.name}
      </li>
    );
  }
}

const toggleGoal = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
      _id
    }
  }
`;

export default graphql(toggleGoal, {
  name: "toggleGoal",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(Goal);
