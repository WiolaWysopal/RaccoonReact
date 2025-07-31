const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const posts = [];

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    posts: {
      type: GraphQLList(PostType),
      resolve: () => posts,
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPost: {
      type: PostType,
      args: {
        content: { type: GraphQLString },
      },
      resolve: (parent, { content }) => {
        const newPost = { id: `${posts.length + 1}`, content };
        posts.push(newPost);
        return newPost;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000/graphql");
});
