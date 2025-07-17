import { useState } from "react";
import DynamicButton from "./EmotionButton";

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive((prev) => !prev);

  return (
    <DynamicButton active={isActive} onClick={toggleActive}>
      {" "}
      Click me {isActive ? "(Active)" : "(Unactive)"}{" "}
    </DynamicButton>
  );
}

export default App;
