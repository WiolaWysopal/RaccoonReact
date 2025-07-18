/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import KeyframesComponent from "./KeyframesComponent";

function App() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #fafafa;
      `}
    >
      <KeyframesComponent />
    </div>
  );
}

export default App;
