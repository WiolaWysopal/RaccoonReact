window.addEventListener("load", () => {
  axe.run(document, {}, (err, result) => {
    if (err) throw err;
    console.log("Violations: ", result.violations);
  });
});
