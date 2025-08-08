import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json(),
      ),
  });

  if (isLoading) return <p> Data Loading </p>;
  if (error) return <p> DATA DOWNLOADING ERROR </p>;

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
