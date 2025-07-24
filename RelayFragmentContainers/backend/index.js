const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");

const users = [
  { id: "1", name: "Anna", email: "anna@example.com" },
  { id: "2", name: "Bartek", email: "bartek@example.com" },
];

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

async function startServer() {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(4000, () => {
    console.log("🚀 Server ready at http://localhost:4000/graphql");
  });
}

startServer();
