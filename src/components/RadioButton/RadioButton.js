import React from "react";

function RadioButton({ option, group, ...delegated }) {
  return (
    <label htmlFor={`variant-${option}`}>
      <input
        id={`variant-${option}`}
        type="radio"
        name={group}
        value={option}
        {...delegated}
      />
      {option}
    </label>
  );
}

export default RadioButton;
