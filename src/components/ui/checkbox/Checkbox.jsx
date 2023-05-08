import React from "react";
import CheckboxContext from "./CheckboxContext";

function Checkbox({ children, disabled, value, checked, onChange, style }) {
  const context = React.useContext(CheckboxContext);

  if (!context) {
    return (
      <label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          className={style}
          onChange={({ target: { checked } }) => onChange(checked)}
        />
        {children}
      </label>
    );
  }
  const { isDisabled, isChecked, toggleValue } = context;

  return (
    <label>
      <input
        type="checkbox"
        disabled={isDisabled(disabled)}
        checked={isChecked(value)}
        className={style}
        onChange={({ target: { checked } }) => toggleValue({ checked, value })}
      />
      {children}
    </label>
  );
}

export default Checkbox;
