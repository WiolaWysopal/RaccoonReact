import React from "react";
import { Navigate } from "react-router-dom";

const withAuthorization = (WrappedComponent, { redirect = false } = {}) => {
  return function AuthorizedComponent(props) {
    const { isAuthorized } = props;

    if (!isAuthorized) {
      if (redirect) {
        return <Navigate to="/login" />;
      }
      return <div>Access denied</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthorization;
