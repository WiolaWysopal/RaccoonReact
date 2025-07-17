/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const style = css`
  color: #e90bd7ff;
  margin: 1rem;
`;

export const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: "underline",
});

export const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);
