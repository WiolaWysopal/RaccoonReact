/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";

const bounceVariable = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const KeyframesComponent = () => {
  return (
    <div
      css={css`
        animation: ${bounceVariable} 5s ease infinite;
        background-color: #4a90e2;
        color: white;
        padding: 2rem;
        border-radius: 0.5rem;
        text-align: center;
        font-size: 2rem;
        max-width: 25rem;
        margin: 0 auto;

        @media (max-width: 768px) {
          background-color: #50e3c2;
          font-size: 1.5rem;
        }

        @media (max-width: 480px) {
          background-color: #f5a623;
          font-size: 1rem;
        }
      `}
    >
      Hit me baby one more time!
    </div>
  );
};

export default KeyframesComponent;
