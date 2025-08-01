import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchGraphQL(params, variables) {
  return fetch("https://countries.trevorblades.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  }).then((response) => response.json());
}

const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});

export default environment;
