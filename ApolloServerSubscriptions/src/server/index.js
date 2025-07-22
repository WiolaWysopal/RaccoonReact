import express from "express";
import http from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";
import EventEmitter from "events";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { ApolloServer, gql } = require("apollo-server-express");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { execute, subscribe } = require("graphql");

const pubSub = new EventEmitter();

const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Subscription {
    newMessage: String
  }
`;

const resolversArrays = {
  Subscription: {
    newMessage: {
      subscribe: () => {
        const iteratorVariable = {
          next() {
            return new Promise((resolve) => {
              const handlerVariable = (message) => {
                resolve({ value: { newMessage: message }, done: false });
                pubSub.removeListener("NEW_MESSAGE", handlerVariable);
              };
              pubSub.on("NEW_MESSAGE", handlerVariable);
            });
          },
          return() {
            return Promise.resolve({ done: true });
          },
          throw(error) {
            return Promise.reject(error);
          },
          [Symbol.asyncIterator]() {
            return this;
          },
        };
        return iteratorVariable;
      },
    },
  },
};

const schemaVariable = makeExecutableSchema({
  typeDefs,
  resolvers: resolversArrays,
});

const appVariable = express();
const httpServer = http.createServer(appVariable);

const serverVariable = new ApolloServer({ schema: schemaVariable });

await serverVariable.start();

serverVariable.applyMiddleware({ app: appVariable });

const PORT = 4000;

// Subscriptions-Transport-WS działa obok HTTP servera
SubscriptionServer.create(
  {
    schema: schemaVariable,
    execute,
    subscribe,
    onConnect: () => console.log("Client connected for subscriptions"),
    onDisconnect: () => console.log("Client disconnected from subscriptions"),
  },
  {
    server: httpServer,
    path: serverVariable.graphqlPath,
  },
);

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${serverVariable.graphqlPath}`,
  );
  console.log(
    `📡 Subscriptions ready at ws://localhost:${PORT}${serverVariable.graphqlPath}`,
  );

  let countVariable = 0;
  setInterval(() => {
    countVariable++;
    pubSub.emit("NEW_MESSAGE", `Message number ${countVariable}`);
  }, 3000);
});
