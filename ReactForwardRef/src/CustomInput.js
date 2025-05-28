import React, { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" placeholder="Type something..." />;
});

export default CustomInput;
