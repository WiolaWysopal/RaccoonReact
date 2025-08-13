import { describe, it, expect } from "vitest";
import { fetchData } from "./fetchData.js";

describe("fetchData", () => {
  it("Should correct data be returned (async/await)", async () => {
    const dataVariable = await fetchData();
    expect(dataVariable).toBe("API Data");
  });

  it("Should correct data be returned (.resolvers)", () => {
    return expect(fetchData()).resolves.toBe("API Data");
  });
});
