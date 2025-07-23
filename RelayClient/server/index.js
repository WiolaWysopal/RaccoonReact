const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
  }
`;

// Przykładowe dane:
const usersArray = [
  { id: "1", name: "Jan Kowalski" },
  { id: "2", name: "Anna Nowak" },
];

const resolversArray = {
  Query: {
    user: (_, { id }) => usersArray.find((user) => user.id === id) || null,
  },
};

const serverVariable = new ApolloServer({
  typeDefs,
  resolvers: resolversArray,
});

serverVariable.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
