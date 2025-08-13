import { describe, it, expect, vi } from "vitest";
import { getDataFromServer } from "./api.js";
import { processData } from "./server.js";

vi.mock("./api.js", () => ({
  getDataFromServer: vi.fn(),
}));

describe("processData", () => {
  it("Should use mocked data", async () => {
    getDataFromServer.mockResolvedValue("Test Data");

    const result = await processData();
    expect(result).toBe("Proceed: Test Data");
  });
});
