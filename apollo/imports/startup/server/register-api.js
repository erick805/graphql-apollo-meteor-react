import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return "Hello world";
    },
    resolutions() {
      return [
        {
          _id: "fake id",
          name: "new resolution"
        },
        {
          _id: "fake id 2",
          name: "get stuff done!"
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
