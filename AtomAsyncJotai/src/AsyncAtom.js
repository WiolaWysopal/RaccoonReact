import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

const userAtom = atomWithQuery((get) => ({
  queryKey: ["users"],
  queryFn: async () => {
    const resVariable = await fetch(
      `https://jsonplaceholder.typicode.com/users/`,
    );
    return resVariable.json();
  },
}));

const UserData = () => {
  const [{ data, isPending, isError }] = useAtom(userAtom);

  if (isPending) return <div style={{ color: "blue" }}> Loading ... </div>;
  if (isError) return <div style={{ color: "red" }}> Error </div>;

  return (
    <div style={{ color: "green" }}>
      {data.map((user) => (
        <div key={user.id}>
          {" "}
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  );
};

export default UserData;
