import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("renders welcome message when user is logged in", () => {
    render(<Greeting isLoggedIn={true} username="Anna" />);
    expect(screen.getByText("Welcome, Anna!")).toBeInTheDocument();
  });

  it("renders login message when user is not logged in", () => {
    render(<Greeting isLoggedIn={false} />);
    expect(screen.getByText("Please log in")).toBeInTheDocument();
  });
});
