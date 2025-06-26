import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/settingSlice";

export const SettingsForm = () => {
  const dispatchVariable = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  return (
    <div>
      <h2> Settings </h2>
      <p>
        {" "}
        Current theme: <strong> {theme} </strong>
      </p>
      <button onClick={() => dispatchVariable(toggleTheme())}>
        {" "}
        Toggle Theme
      </button>
    </div>
  );
};
