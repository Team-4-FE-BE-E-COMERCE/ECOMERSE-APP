import React from "react";

function Button(props) {
  return (
    <button
      class="bg-bgDasar text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
    >
      {props.label}
    </button>
  );
}

export default Button;
