import "./App.css";
import { Provider } from "./components/ui/provider";
import ChakraBox from "./ChakraBox";
import ChakraButton from "./ChakraButton";
import ChakraText from "./ChakraText";

function App() {
  return (
    <Provider>
      <ChakraBox>
        <ChakraText />
      </ChakraBox>
      <ChakraButton />
    </Provider>
  );
}

export default App;
