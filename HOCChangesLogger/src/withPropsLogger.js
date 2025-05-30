import React, { useEffect, useRef } from "react";

/**
 * HOC: Loguje zmiany propsów przekazywanych do komponentu
 * @param {React.ComponentType} WrappedComponent - komponent do owrapowania
 */
function withPropsLogger(WrappedComponent) {
  return function LoggedComponent(props) {
    const previousProps = useRef({});

    useEffect(() => {
      const changedProps = Object.entries(props).reduce((acc, [key, value]) => {
        if (previousProps.current[key] !== value) {
          acc[key] = {
            from: previousProps.current[key],
            to: value,
          };
        }
        return acc;
      }, {});

      if (Object.keys(changedProps).length > 0) {
        console.log(
          `[withPropsLogger] Props changes in <${WrappedComponent.name || "Component"}>:`,
          changedProps,
        );
      }

      previousProps.current = props;
    }, [props]);

    return <WrappedComponent {...props} />;
  };
}

export default withPropsLogger;
