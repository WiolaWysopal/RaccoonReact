import React from "react";
import { useStore } from "./store";

const UserProfile = () => {
  const firstName = useStore((state) => state.firstName);
  const theme = useStore((state) => state.theme);

  return (
    <div>
      <p> Name: {firstName} </p>
      <p> Current theme: {theme} </p>
    </div>
  );
};

export default UserProfile;
