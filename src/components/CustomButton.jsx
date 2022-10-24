import React from "react";

function CustomButton({ id, label, loading, onClick }) {
  return (
    <button id={id} className={`bg-bgdasar text-white font-bold py-2 px-4 rounded ${loading && "bg-slate-500 cursor-not-allowed"} `} onClick={onClick} disabled={loading}>
      {label}
    </button>
  );
}

export default CustomButton;
