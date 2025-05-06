const buttonVariable = document.getElementById("loadModule");
buttonVariable.addEventListener("click", () => {
  import("./greet.js")
    .then((module) => {
      const greetVariable = module.greet;
      greetVariable();
    })
    .catch((err) => {
      console.error("Błąd ładowania modułu:", err);
    });
});
