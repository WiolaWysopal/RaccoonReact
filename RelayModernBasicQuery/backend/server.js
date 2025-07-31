const corsVariable = require("cors");
const expressVariable = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const userData = {
  1: { id: "1", name: "Alice" },
  2: { id: "2", name: "Bob" },
};

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    user: {
      type: userType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        return userData[args.id];
      },
    },
  }),
});

const schemaVariable = new GraphQLSchema({
  query: rootQuery,
});

const appVariable = expressVariable();
appVariable.use(corsVariable());

// Tutaj podpinamy GraphQL pod /graphql
appVariable.use(
  "/graphql",
  graphqlHTTP({
    schema: schemaVariable,
    graphiql: true,
  }),
);

appVariable.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});
