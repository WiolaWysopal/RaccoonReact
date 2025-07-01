import React from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function Home() {
  const queryClient = useQueryClient();

  const postQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      return data;
    },
  });

  const addUserMutation = useMutation({
    mutationFn: async (newUser) => {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser,
      );
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["users"], (old) => [...old, data]);
    },
  });

  const [name, setName] = React.useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addUserMutation.mutate({ name });
      setName("");
    }
  };

  if (postQuery.isLoading) return <h1>Loading...</h1>;
  if (postQuery.isError) return <h1>Error loading data!</h1>;

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
        />
        <button type="submit">Add User</button>
      </form>

      <h1>Home</h1>
      {postQuery.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Home;
