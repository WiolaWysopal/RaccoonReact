import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

function UserList({ users }) {
  return (
    <div>
      <h2>Lista użytkowników</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default createFragmentContainer(UserList, {
  users: graphql`
    fragment UserList_users on User @relay(plural: true) {
      id
      name
      email
    }
  `,
});
