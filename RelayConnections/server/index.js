const { ApolloServer, gql } = require("apollo-server");

const postsArray = Array.from({ length: 50 }, (_, i) => ({
  id: `post-${i + 1}`,
  title: `Post number ${i + 1}`,
}));

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
  }

  type PostEdge {
    cursor: String!
    node: Post!
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
  }

  type PostConnection {
    edges: [PostEdge!]!
    pageInfo: PageInfo!
  }

  type Query {
    posts(first: Int, after: String): PostConnection!
  }
`;

const resolversFunctions = {
  Query: {
    posts: (_, { first = 10, after }) => {
      const startIndex = after
        ? postsArray.findIndex((post) => post.id === after) + 1
        : 0;
      const sliceVariable = postsArray.slice(startIndex, startIndex + first);
      const edgesVariable = sliceVariable.map((post) => ({
        cursor: post.id,
        node: post,
      }));
      const endCursor = edgesVariable.length
        ? edgesVariable[edgesVariable.length - 1].cursor
        : null;
      const hasNextPage = startIndex + first < postsArray.length;

      return {
        edges: edgesVariable,
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      };
    },
  },
};

const serverVariable = new ApolloServer({
  typeDefs,
  resolvers: resolversFunctions,
});

serverVariable.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
