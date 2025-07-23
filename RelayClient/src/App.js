import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./RelayEnvironment";
import UserComponent from "./UserQuery";

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <UserComponent />
    </RelayEnvironmentProvider>
  );
}

export default App;
