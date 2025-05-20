import React, { useEffect } from "react";

function withLogger(WrappedComponent) {
  return function ComponentWithLogger(props) {
    useEffect(() => {
      console.log(`[LOG] ${WrappedComponent.name} mounted.`);
      return () => {
        console.log(`[LOG] ${WrappedComponent.name} unmounted.`);
      };
    }, []);

    useEffect(() => {
      console.log(`[LOG] ${WrappedComponent.name} updated.`, props);
    }, [props]);

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;
