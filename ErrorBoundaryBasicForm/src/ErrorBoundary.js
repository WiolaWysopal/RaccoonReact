import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Zmieniamy stan, żeby wyświetlić fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Można np. wysłać log błędu do serwera
    console.error("Error catched by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2> Something went wrong </h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
