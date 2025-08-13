import { getDataFromServer } from "./api";

export async function processData() {
  const data = await getDataFromServer();
  return `Przetworzone: ${data}`;
}
