import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const booksData = [
  {
    title: "The Lost One",
    author: "Jane Doe",
  },
  {
    title: "Hidden in mist",
    author: "John Doe",
  },
];

const resolversVariable = {
  Query: {
    books: () => booksData,
  },
};

const serverVariable = new ApolloServer({
  typeDefs,
  resolversVariable,
});

const { url } = await startStandaloneServer(serverVariable, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
