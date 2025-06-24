import React, { useState } from "react";
import { useStore } from "./store";

const UserForm = () => {
  const setUserName = useStore((state) => state.setUserName);
  const setLogged = useStore((state) => state.setLogged);
  const userIntroduce = useStore((state) => state.userIntroduce);

  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(name);
    setLogged(true);
    setShowMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Say your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit"> Log in</button>
      </form>

      {showMessage && <div> {userIntroduce()} </div>}
    </>
  );
};

export default UserForm;
