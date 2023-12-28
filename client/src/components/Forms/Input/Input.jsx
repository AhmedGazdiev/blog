import React from "react";
import "./input.scss";

const Input = ({
  value,
  placeholder,
  name,
  required = true,
  type = "text",
  textarea,
  onChange,
}) => {
  return (
    <div className={`field ${value ? "active" : ""}`}>
      <div className="field_label fs-14">
        {placeholder} {required && <span>*</span>}
      </div>

      <div className="field_input">
        {textarea ? (
          <textarea
            type={type}
            name={name}
            value={value || ""}
            onChange={onChange}
            required
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value || ""}
            onChange={onChange}
            required
          />
        )}
      </div>
    </div>
  );
};

export default Input;
