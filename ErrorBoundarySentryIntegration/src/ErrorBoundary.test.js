import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";
import { BuggyComponent } from "./BuggyComponent";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("ErrorBoundary shows Fallback UI and responses on button", () => {
  render(
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>,
  );

  // Sprawdź komunikat
  expect(screen.getByText("Oops! Something went wrong")).toBeInTheDocument();
  expect(screen.getByText("Try again")).toBeInTheDocument();

  // Kliknięcie przycisku powinno zresetować stan (wrócić do children)
  fireEvent.click(screen.getByText("Try again"));
});
