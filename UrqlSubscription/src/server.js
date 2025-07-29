// src/server.js
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useServer } from "graphql-ws/lib/use/ws";
import { PubSub } from "graphql-subscriptions";
import { createPubSub } from "graphql-yoga";

// Typy GraphQL
const typeDefs = `
  type Data {
    id: ID!
    value: String!
  }

  type Query {
    _dummy: Boolean
  }

  type Subscription {
    newData: Data
  }
`;

// Dane i pubsub
let id = 0;
const pubsub = createPubSub();

setInterval(() => {
  const newItem = {
    id: id++,
    value: `Random value: ${Math.floor(Math.random() * 100)}`,
  };
  pubsub.publish("NEW_DATA", newItem);
}, 3000);

// Resolver subskrypcji
const resolvers = {
  Subscription: {
    newData: {
      subscribe: () => pubsub.subscribe("NEW_DATA"),
      resolve: (payload) => payload,
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga({
  schema,
  graphqlEndpoint: "/graphql",
});

const httpServer = createServer(yoga);

// 🔧 WebSocketServer
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

// 🔌 GraphQL WS server (graphql-ws)
useServer({ schema }, wsServer);

// 🚀 Start serwera
httpServer.listen(4000, () => {
  console.log("🚀 Serwer działa na http://localhost:4000/graphql");
});
