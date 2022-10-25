import React from "react";

function CustomButton({ id, label, loading, onClick }) {
  return (
    <button
      id={id}
      className={`bg-white text-bgdasar
    w-full font-bold py-2 px-4 rounded ${
      loading && "bg-white cursor-not-allowed"
    } `}
      onClick={onClick}
      disabled={loading}
    >
      {label}
    </button>
  );
}

function CustomButtonSatu({ id, label, loading, onClick }) {
  return (
    <button
      id={id}
      className={`
      bg-bgdasar text-white border border-bgdasar
    w-full
    font-bold py-2 px-4 rounded ${
      loading && "bg-slate-500 cursor-not-allowed"
    } `}
      onClick={onClick}
      disabled={loading}
    >
      {label}
    </button>
  );
}

export { CustomButton, CustomButtonSatu };
