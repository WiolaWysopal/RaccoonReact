import React from "react";
import { Provider } from "urql";
import { client } from "./urqlClient.js";
import LiveData from "./LiveData.js";

function App() {
  return (
    <Provider value={client}>
      <LiveData />
    </Provider>
  );
}

export default App;
