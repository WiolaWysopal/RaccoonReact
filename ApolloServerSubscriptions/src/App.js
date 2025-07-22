import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useSubscription,
  gql,
  split,
  HttpLink,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

// HTTP link
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

// WebSocket link (subscriptions-transport-ws)
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});

// Split link for queries/mutations vs subscriptions
const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return (
      def.kind === "OperationDefinition" && def.operation === "subscription"
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription {
    newMessage
  }
`;

function Messages() {
  const { data, loading, error } = useSubscription(NEW_MESSAGE_SUBSCRIPTION);

  console.log("loading:", loading);
  console.log("data:", data);
  console.log("error:", error);

  if (loading)
    return <p style={{ color: "blue" }}>Subscriptions downloading...</p>;
  if (error)
    return <p style={{ color: "red" }}>SUBSCRIPTION ERROR: {error.message}</p>;

  return <p style={{ color: "green" }}>RECEIVED: {data?.newMessage}</p>;
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <h2> Apollo Server Subscription </h2>
      <Messages />
    </ApolloProvider>
  );
}
