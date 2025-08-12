import { test, expect } from "vitest";
import add from "./math.js";

test("Add two natural numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});
