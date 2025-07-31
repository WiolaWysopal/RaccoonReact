import React from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./relayEnvironment";
import User from "./User";

export default function App() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery {
          user(id: "1") {
            ...User_user
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error: {error.message}</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <User user={props.user} />;
      }}
    />
  );
}
