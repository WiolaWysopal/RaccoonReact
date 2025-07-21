import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const booksArray = [
  { id: "1", title: "Harry Potter", author: "J.K. Rowling" },
  { id: "2", title: "Lord Of The Ring", author: "J.R.R. Tolkien" },
];

const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
  }
`;

const resolversVariable = {
  Query: {
    books: () => booksArray,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = {
        id: String(booksArray.length + 1),
        title,
        author,
      };
      booksArray.push(newBook);
      return newBook;
    },
  },
};

const serverVariable = new ApolloServer({
  typeDefs,
  resolvers: resolversVariable,
});

const { url } = await startStandaloneServer(serverVariable, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
