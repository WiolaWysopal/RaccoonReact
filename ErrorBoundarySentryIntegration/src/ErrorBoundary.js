import React from "react";
import * as Sentry from "@sentry/react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info);

    // Wysyłanie błędu do Sentry (lub do konsoli, jeśli DSN pusty)
    try {
      Sentry.captureException(error);
      Sentry.captureMessage(
        `ErrorBoundary caught an error: ${info.componentStack}`,
      );
    } catch (err) {
      console.warn("Sentry unavailable — local log only:", error);
    }
  }

  handleReload = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f9f9f9",
            color: "#333",
            fontFamily: "sans-serif",
          }}
        >
          <h1>Oops! Something went wrong</h1>
          <p>An error occurred during loading this part of the app.</p>
          <button
            onClick={this.handleReload}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
