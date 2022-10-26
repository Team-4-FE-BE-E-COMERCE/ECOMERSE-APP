import Layout from "../components/Layout";
import React from "react";
import { CustomButtonSatu } from "../components/CustomButton";
import { Card } from "../components/Card";
import { useTitle } from "../utils/redux/useTitle";

function OrderHistory() {
  useTitle("History");
  return (
    <Layout>
      <div className="border w-[93rem] h-[15rem] ">
        <div className="border grid grid-cols-3">
          <div className=" w-72">
            <img src="https://pict.sindonews.net/dyn/850/pena/news/2021/09/13/700/538850/faktafakta-yang-membuat-hidup-batman-menyedihkan-uri.jpg" className="h-60" alt="" />
          </div>
          <div className="border py-10">
            <h2 className="text-hitam-400  font-extrabold font-poppins py-2 ">Nama Produks</h2>
            <p className="text-hitam  font-extrabold font-poppins mb-6">Alamat : Alamat : JL. Kyai Mojo, New York Selatan</p>
            <h2 className="text-hitam-400  font-extrabold font-poppins ">Harga : Rp. 50.000</h2>

            <div className="w-80 grid grid-cols-2 gap-4 ">
              <CustomButtonSatu label="Cancel" />
              <CustomButtonSatu label="Cancel" />
            </div>
          </div>
        </div>
      </div>

      <div className="border  mt-20">
        <div className="grid grid-cols-2">
          <div className="border w-[40rem] h-[33rem] bg-bgdasar">
            <p className="text-center  font-poppins font-extrabold text-3xl text-white mt-5">Canceled</p>
            <div className=" h-[16rem] w-[20rem]  py-14 ml-5">
              <Card />
            </div>
          </div>
          <div className="borderw-[40rem] h-[33rem] bg-bgdasar">
            <p className="text-center  font-poppins font-extrabold text-3xl text-white mt-5">Succes</p>
            <div className="  h-[16rem] w-[20rem]  py-14 ml-5">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OrderHistory;
