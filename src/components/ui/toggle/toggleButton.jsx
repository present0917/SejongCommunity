import React, { useState } from "react";
import ToggleButtonContext from "./toggleContext";
import defaultStyle from "./toggleButton.module.css";

function ToggleButton({ children, disabled, value, checked, onChange, style }) {
  const context = React.useContext(ToggleButtonContext);
  const inputstyle = {
    display: "none",
  };
  if (!context) {
    if (!style) {
      return (
        <>
          <input
            type="checkbox"
            disabled={disabled}
            checked={checked}
            onChange={({ target: { checked } }) => onChange(checked)}
          />
          <label
            className={checked ? defaultStyle.default : defaultStyle.checked}
          >
            {children}
          </label>
        </>
      );
    }
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

  if (!style) {
    return (
      <label
        className={
          isChecked(value) ? defaultStyle.default : defaultStyle.checked
        }
      >
        <input
          type="checkbox"
          style={inputstyle}
          disabled={isDisabled(disabled)}
          checked={isChecked(value)}
          onChange={({ target: { checked } }) =>
            toggleValue({ checked, value })
          }
        />
        {children}
      </label>
    );
  }
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
