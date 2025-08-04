import "./App.css";

import useSWR from "swr";

const fetcher = (url) => {
  return fetch(url).then((response) => response.json());
};

function App() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
  );

  if (isLoading) return <p style={{ color: "blue" }}> Loading Data </p>;
  if (error) return <p style={{ color: "red" }}> AN ERROR OCCURED </p>;

  return (
    <div className="App">
      <h1 style={{ color: "green" }}> Users' List </h1>
      <ul style={{ listStyleType: "none" }}>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
