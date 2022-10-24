import React from "react";

function CustomInput({ id, type, placeholder, value, onChange, disabled }) {
  return (
    <input
      id={id}
      className="
    bg-slate-200 rounded text-hitam p-2 border focus:outline-none
    focus:border-bgdasar focus:ring-1
    focus:ring-bgdasar"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={value}
    />
  );
}

export default CustomInput;
