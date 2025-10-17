import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";
import { BuggyComponent } from "./BuggyComponent";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {}); // wyciszamy błędy w konsoli
});

afterEach(() => {
  console.error.mockRestore();
});

test("ErrorBoundary CATCHES ERROR AND SHOWS FALLBACK UI", () => {
  render(
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>,
  );

  expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
});
