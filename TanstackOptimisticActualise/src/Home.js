import React from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function Home() {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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

    //  OPTYMISTYCZNA AKTUALIZACJA

    onMutate: async (newUser) => {
      setErrorMsg(null); // wyczyszcza ewentualny wcześniejszy błąd

      await queryClient.cancelQueries({ queryKey: ["users"] });

      const previousUsers = queryClient.getQueryData(["users"]);

      const optimisticUser = {
        ...newUser,
        id: Date.now(), // tymczasowe id
      };

      queryClient.setQueryData(["users"], (old) => [...old, optimisticUser]);
      return { previousUsers }; // kontekst do ewentualnego rollbacku
    },

    //  Cofnięcie optymistycznej zmiany w razie błędu
    onError: (err, newUser, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(["users"], context.previousUsers);
      }
      setErrorMsg("Nie udało się dodać użytkownika");
    },

    //  Odświeżenie danych po mutacji
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

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

      {errorMsg && <p style={{ color: "red" }}> {errorMsg} </p>}

      <h1>Home</h1>
      {postQuery.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Home;
