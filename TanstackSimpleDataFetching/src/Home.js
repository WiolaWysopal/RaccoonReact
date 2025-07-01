import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const postQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.data;
      return data;
    },
  });

  if (postQuery.isLoading) return <h1>Loading....</h1>;
  if (postQuery.isError) return <h1>Error loading data!!!</h1>;

  return (
    <div>
      <h1>Home</h1>
      {postQuery.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Home;
