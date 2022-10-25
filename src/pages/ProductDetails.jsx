import Layout from "../components/Layout";
import React from "react";
import { CustomButtonSatu } from "../components/CustomButton";

function ProductDetails() {
  return (
    <Layout>
      <div class=" h-[40rem] bg-bgdasar flex items-center p-5 lg:p-10 overflow-hidden relative rounded-lg">
        <div class="md:flex items-center -mx-10 border-pink-300 ml-9">
          <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div class="relative">
              <img
                src="https://pict.sindonews.net/dyn/850/pena/news/2021/09/13/700/538850/faktafakta-yang-membuat-hidup-batman-menyedihkan-uri.jpg"
                class=" h-[35rem] w-[50rem] relative z-10"
                alt=""
              />
              <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-10 mt-2">
            <div class="mb-2 font-poppins text-white">
              <p class="font-bold  text-4xl  mb-8">Product Details</p>
              <p class="font-bold  text-2xl mb-2 ">Price : Rp. 50.000</p>
              <p class="font-bold  text-2xl mb-2">Seller : Andre</p>
              <p class="font-bold  text-2xl mb-2">Stok Total : Sisa 2</p>
              <p class="font-bold  text-2xl mb-4">
                Location : JL. Kyai Mojo, New York Selatan
              </p>

              <p class="font-bold  text-2xl mb-4">Detail Produks :</p>
              <p class="font-bold  text-2xl mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class=" grid grid-cols-3 mt-8 w-full  ">
        <div></div>
        <div>
          <CustomButtonSatu label="Add To Cart" />
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
