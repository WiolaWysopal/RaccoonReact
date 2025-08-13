export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API Data");
    }, 500);
  });
}
