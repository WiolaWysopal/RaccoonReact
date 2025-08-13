import { describe, it, expect, vi } from "vitest";

vi.mock("./api", () => ({
  getDataFromServer: vi.fn(),
}));

import { getDataFromServer } from "./api";
import { processData } from "./service";

describe("processData", () => {
  it("powinno używać mockowanych danych", async () => {
    getDataFromServer.mockResolvedValue("Dane testowe");

    const result = await processData();
    expect(result).toBe("Przetworzone: Dane testowe");
  });
});
