import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments counter on button click and updates name on input", async () => {
  render(<Counter />);

  const button = screen.getByText("Increment");
  await userEvent.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();

  const input = screen.getByPlaceholderText("Enter name");
  await userEvent.type(input, "Alice");
  expect(screen.getByText("Hello Alice")).toBeInTheDocument();
});
