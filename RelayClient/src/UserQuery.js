import { useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";

const query = graphql`
  query UserQuery($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

export default function UserComponent() {
  const data = useLazyLoadQuery(query, { id: "1" });

  if (!data.user) {
    return <p>Użytkownik nie istnieje.</p>; // albo spinner
  }

  return (
    <div>
      <p>ID: {data.user.id}</p>
      <p>Name: {data.user.name}</p>
    </div>
  );
}
