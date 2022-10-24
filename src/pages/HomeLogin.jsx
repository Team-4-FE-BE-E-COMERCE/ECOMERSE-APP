import React from "react";
import Layout from "../components/Layout";
import { CardBtn } from "../components/Card";
import CustomInput from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";

import { WithRouter } from "../utils/Navigation";

function HomeLogin() {
  return (
    <Layout>
      <div class="flex flex-row font-poppins">
        <div class="basis-3/4">
          <div className="grid grid-cols-3">
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
            <CardBtn />
          </div>
        </div>
        <div class="basis-1/4 border bg-bgdasar rounded-xl  text-white h-screen mt-2">
          <div className="m-2 text-center font-bold">Upload Your Sales Here</div>
          <div className="px-5">
            <div className="bg-white">
              <div class="flex justify-center items-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div>
              <div>Judul Product</div>
              <div>
                <CustomInput placeholder="Title Produt" type="text" id="titleProduct" />
              </div>
            </div>
            <div>
              <div>Price</div>
              <div>
                <CustomInput placeholder="Price" type="number" id="price" />
              </div>
            </div>
            <div>
              <div>Total Product</div>
              <div>
                <CustomInput placeholder="1" type="number" id="totalProduct" />
              </div>
            </div>
            <div>
              <div>Detail Product</div>
              <div className="pb-2 w-full">
                <textarea className="w-full rounded-sm" name="DetailProduct" id="detailProduct" cols="" rows="6"></textarea>
                {/* <CustomInput placeholder="Detail Product" type="text" id="detailProduct" /> */}
              </div>
            </div>
            <div className=" w-full">
              <CustomButton label="Upload" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(HomeLogin);
