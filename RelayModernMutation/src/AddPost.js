import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import environment from "./relayEnvironment";

const mutation = graphql`
  mutation AddPostMutation($content: String) {
    addPost(content: $content) {
      id
      content
    }
  }
`;

function AddPost() {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    commitMutation(environment, {
      mutation,
      variables: { content },
      onCompleted: (response) => {
        alert("Post added: " + response.addPost.content);
        setContent("");
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <div>
      <h2>Add Post</h2>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type post content"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AddPost;
