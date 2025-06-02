import React from "react";
import withRenderTimer from "./withRenderTimer";

function MyComponent() {
  return <div>Hey, I'm just rendering right now!</div>;
}

export default withRenderTimer(MyComponent);
