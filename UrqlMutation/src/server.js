const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Link {
    id: ID!
    description: String!
    url: String!
  }

  type Mutation {
    post(description: String!, url: String!): Link
  }

  type Query {
    info: String!
  }
`;

let idCount = 1;
const linksArray = [];

const resolversObjects = {
  Query: {
    info: () => `This is a simple GraphQL API`,
  },
  Mutation: {
    post: (_, { description, url }) => {
      const newLink = {
        id: idCount++,
        description,
        url,
      };
      linksArray.push(newLink);
      return newLink;
    },
  },
};

const serverVariable = new ApolloServer({
  typeDefs,
  resolvers: resolversObjects,
});

serverVariable.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
