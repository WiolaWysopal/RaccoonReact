import { createClient, fetchExchange } from "urql";

export const clientVariable = createClient({
  url: "https://countries.trevorblades.com",
  exchanges: [fetchExchange],
});
