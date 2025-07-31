import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

function User(props) {
  const user = props.user;
  return (
    <div>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
}

export default createFragmentContainer(User, {
  user: graphql`
    fragment User_user on User {
      id
      name
    }
  `,
});
