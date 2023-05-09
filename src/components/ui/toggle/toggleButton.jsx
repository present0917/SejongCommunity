import React, { useState } from "react";
import ToggleButtonContext from "./toggleContext";

function ToggleButton({ children, disabled, value, checked, onChange, style }) {
  const context = React.useContext(ToggleButtonContext);
  const inputstyle = {
    display: "none",
  };
  if (!context) {
    return (
      <>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        <label className={style}>{children}</label>
      </>
    );
  }
  const { isDisabled, isChecked, toggleValue } = context;

  return (
    <label className={style}>
      <input
        type="checkbox"
        style={inputstyle}
        disabled={isDisabled(disabled)}
        checked={isChecked(value)}
        onChange={({ target: { checked } }) => toggleValue({ checked, value })}
      />
      {children}
    </label>
  );
}

export default ToggleButton;
