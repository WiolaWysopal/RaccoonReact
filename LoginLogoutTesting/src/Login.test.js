import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Proces logowania i wylogowania", () => {
  test("Poprawne logowanie", () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/Nazwa użytkownika/i), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Hasło/i), {
      target: { value: "1234" },
    });
    fireEvent.click(screen.getByText(/Zaloguj/i));

    expect(screen.getByText(/Witaj, admin!/i)).toBeInTheDocument();
  });

  test("Błędne dane logowania", () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/Nazwa użytkownika/i), {
      target: { value: "user" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Hasło/i), {
      target: { value: "wrong" },
    });
    fireEvent.click(screen.getByText(/Zaloguj/i));

    expect(screen.getByRole("alert", { name: "" })).toHaveTextContent(
      "Nieprawidłowe dane logowania",
    );
  });

  test("Wylogowanie po zalogowaniu", () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/Nazwa użytkownika/i), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Hasło/i), {
      target: { value: "1234" },
    });
    fireEvent.click(screen.getByText(/Zaloguj/i));

    fireEvent.click(screen.getByText(/Wyloguj/i));

    expect(screen.getByText(/Logowanie/i)).toBeInTheDocument();
  });
});
