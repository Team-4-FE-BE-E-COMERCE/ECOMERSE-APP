import React from "react";

function CustomComment({ id, type, value, onChange, disabled, cols, rows }) {
  return (
    <textarea
      cols={cols}
      rows={rows}
      id={id}
      className="
      w-full
    bg-bgdasar rounded text-white p-2 border focus:outline-none
    focus:border-bgdasar focus:ring-1
    focus:ring-white"
      type={type}
      onChange={onChange}
      disabled={disabled}
      defaultValue={value}
    />
  );
}

function CustomCommentDua({ id, type, value, onChange, disabled, cols, rows }) {
  return (
    <textarea
      cols={cols}
      rows={rows}
      id={id}
      className="
        w-full
      bg-white rounded text-hitam p-2 border focus:outline-none
      focus:border-bgdasar focus:ring-1
      focus:ring-bgdasar"
      type={type}
      onChange={onChange}
      disabled={disabled}
      defaultValue={value}
    />
  );
}

export { CustomComment, CustomCommentDua };
