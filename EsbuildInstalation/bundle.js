(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) =>
    function __require() {
      return (
        mod ||
          (0, cb[__getOwnPropNames(cb)[0]])(
            (mod = { exports: {} }).exports,
            mod,
          ),
        mod.exports
      );
    };

  // index.js
  var require_index = __commonJS({
    "index.js"() {
      function add(a, b) {
        return a + b;
      }
      function multiply(a, b) {
        return a * b;
      }
      console.log("Sum:", add(2, 3));
      console.log("Product:", multiply(2, 3));
    },
  });
  require_index();
})();
