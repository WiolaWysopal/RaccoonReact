import React from "react";
import DataFetcher from "./DataFetcher";
import "./App.css";

const App = () => {
  return (
    <div class="App">
      <h1>Random Dog - Render Props</h1>
      <DataFetcher
        url="https://dog.ceo/api/breeds/image/random"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <div>
              <img
                src={data.message}
                alt="Random dog"
                style={{ maxWidth: "400px", borderRadius: "8px" }}
              />
              <p>Source: dog.ceo</p>
            </div>
          );
        }}
      />
    </div>
  );
};

export default App;
