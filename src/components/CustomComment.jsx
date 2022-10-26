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

function CustomCommentDua({ id, type, value, onChange, disabled, cols, rows, placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
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

function InputImage({ id, type, value, onChange, images, placeholder }) {
  return (
    <div className="bg-white">
      <div class="flex justify-center items-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div>
            <img className="w-60 h-60 object-cover" src={images} alt={images} />
          </div>

          {/* <div class="flex flex-col justify-center items-center pt-5 pb-6">
            
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG (MAX. 800x400px)</p>
          </div> */}
          <input id={id} type={type} value={value} onChange={onChange} class="hidden" placeholder="sas" />
        </label>
      </div>
    </div>
  );
}

export { CustomComment, CustomCommentDua, InputImage };
