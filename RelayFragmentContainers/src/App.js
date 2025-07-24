import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./RelayEnvironment";
import UserList from "./components/UserList";

function App() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery {
          users {
            ...UserList_users
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) return <div>Błąd: {error.message}</div>;
        if (!props) return <div>Ładowanie...</div>;
        return <UserList users={props.users} />;
      }}
    />
  );
}

export default App;
