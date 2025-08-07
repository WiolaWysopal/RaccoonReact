import React, { useState } from "react";
import request from "superagent";

const QueriesCombining = () => {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [postResponse, setPostResponse] = useState(null);

  const fetchAndUpdateUser = async () => {
    setMessage("");
    setUser(null);
    setPostResponse(null);

    try {
      const getRes = await request.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      const firstUser = getRes.body[0];
      setUser(firstUser);

      const postRes = await request
        .post("https://jsonplaceholder.typicode.com/posts")
        .send({
          userId: firstUser.id,
          title: "Data Update",
          body: "User Data Has Been Updated: Username: " + firstUser.name,
        });

      setPostResponse(postRes.body);
      setMessage("User Data Has Been Updated!");
    } catch (err) {
      console.error(err);
      setMessage("During data downloading an error has occured");
    }
  };

  return (
    <div>
      <h1>GET + POST Superagent</h1>
      <button onClick={fetchAndUpdateUser}>
        {" "}
        Download and Update User's Data
      </button>

      {message && <p> {message} </p>}

      {user && (
        <div>
          <h3>Downloaded User's Data:</h3>
          <p>
            <strong>{user.name}</strong> ({user.email})
          </p>
        </div>
      )}

      {postResponse && (
        <div>
          <h3>POST Response:</h3>
          <pre>{JSON.stringify(postResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default QueriesCombining;
