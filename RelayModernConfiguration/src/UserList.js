import { graphql, useLazyLoadQuery } from "react-relay/hooks";

const UserListQuery = graphql`
  query UserListQuery {
    users {
      id
      name
    }
  }
`;

export default function UserList() {
  const data = useLazyLoadQuery(UserListQuery, {});
  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
