import React from "react";
import gql from "graphql-tag";
import { useMutation } from "urql";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

const CreateLink = () => {
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const [result, executeMutation] = useMutation(POST_MUTATION);

  const submit = React.useCallback(() => {
    executeMutation({ url, description }).then(({ data, error }) => {
      if (!error) {
        setSuccess(true);
        setDescription("");
        setUrl("");
        // Powiadomienie znika po 3 sekundach
        setTimeout(() => setSuccess(false), 3000);
      }
    });
  }, [executeMutation, url, description]);

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <button disabled={result.fetching} onClick={submit}>
        Submit
      </button>
      {success && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Link successfully posted!
        </p>
      )}
    </div>
  );
};

export default CreateLink;
