import React from "react";

/**
 * HOC dodający spinner podczas ładowania danych.
 * Jeśli isLoading === true, zamiast komponentu pojawia się 'Loading...'
 * @param {React.ComponentType} WrappedComponent - komponent do owrapowania
 */
function withLoading(WrappedComponent) {
  return function ComponentWithLoading(props) {
    if (props.isLoading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;
