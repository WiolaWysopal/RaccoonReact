import { getDataFromServer } from "./api";

export async function processData() {
  const dataVariable = await getDataFromServer();
  return `Proceed: ${dataVariable}`;
}
