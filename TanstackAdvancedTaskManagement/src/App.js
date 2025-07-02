import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Post Details</h1>
        <Home postId={1} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
