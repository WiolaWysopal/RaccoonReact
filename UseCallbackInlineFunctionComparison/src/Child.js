import React from "react";

const Child = React.memo(({ onClick, label }) => {
  console.log(`Render Child (${label})`);
  return <button onClick={onClick}>{label}</button>;
});

export default Child;
