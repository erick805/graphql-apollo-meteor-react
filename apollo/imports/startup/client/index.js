import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { inMemoryCache } from "apollo-cache-inmemory";

import App from "../../ui/App";

Meteor.startup(() => {
  render(<App />, document.getElementById("app"));
});
