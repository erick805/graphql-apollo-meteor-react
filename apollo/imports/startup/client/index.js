import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

const App = () => <h1>React and Meteor</h1>;

Meteor.startup(() => {
  render(<App />, document.getElementById("app"));
});
