import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("rendes Hello component", () => {
  render(<Hello />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
