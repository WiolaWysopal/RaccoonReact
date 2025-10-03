import React from "react";

export default function Summary({ values }) {
  return (
    <div>
      <h3> Summary: </h3>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
