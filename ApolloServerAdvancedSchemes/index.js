import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String
    author: User
  }

  type Query {
    books: [Book]
    users: [User]
    user(id: ID!): User
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    addPost(title: String!, content: String, authorId: ID!): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): Boolean
  }
`;

const booksVariable = [
  { title: "The Awakening", author: "Kate Chopin" },
  { title: "City of Glass", author: "Paul Auster" },
];

let usersVariable = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

let postsVariable = [
  { id: "1", title: "Hello World", content: "My first post", authorId: "1" },
  {
    id: "2",
    title: "GraphQL is Great",
    content: "It really is!",
    authorId: "2",
  },
];

const resolversVariable = {
  Query: {
    books: () => booksVariable,
    users: () => usersVariable,
    user: (_, { id }) => usersVariable.find((user) => user.id === id),
    posts: () => postsVariable,
    post: (_, { id }) => postsVariable.find((post) => post.id === id),
  },

  Mutation: {
    addUser: (_, { name, email }) => {
      const newUser = { id: String(usersVariable.length + 1), name, email };
      usersVariable.push(newUser);
      return newUser;
    },
    addPost: (_, { title, content, authorId }) => {
      const newPost = {
        id: String(postsVariable.length + 1),
        title,
        content,
        authorId,
      };
      postsVariable.push(newPost);
      return newPost;
    },
    updatePost: (_, { id, title, content }) => {
      const postUpdatePostVariable = postsVariable.find((p) => p.id === id);
      if (!postUpdatePostVariable) return null;
      if (title !== undefined) postUpdatePostVariable.title = title;
      if (content !== undefined) postUpdatePostVariable.content = content;
      return postUpdatePostVariable;
    },
    deletePost: (_, { id }) => {
      const indexVariable = postsVariable.findIndex((p) => p.id === id);
      if (indexVariable === -1) return false;
      postsVariable.splice(indexVariable, 1);
      return true;
    },
  },

  User: {
    posts: (user) => postsVariable.filter((post) => post.authorId === user.id),
  },

  Post: {
    author: (post) => usersVariable.find((user) => user.id === post.authorId),
  },
};

const serverVariable = new ApolloServer({
  typeDefs,
  resolvers: resolversVariable,
});

const { url } = await startStandaloneServer(serverVariable, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
