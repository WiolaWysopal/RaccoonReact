import { render, screen } from "@testing-library/react";
import User from "./User";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: "Leanne Graham" }),
    }),
  );
});

test("renders fetched user name", async () => {
  render(<User />);
  const userElement = await screen.findByText("Leanne Graham");
  expect(userElement).toBeInTheDocument();
});
