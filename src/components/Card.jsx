import React from "react";
import ButtonPrimary from "./Button";

function Card(props) {
  return (
    <div className="bg-white shadow-md border border-white rounded-lg max-w-[15rem] ">
      <img
        className="rounded-t-lg h-56"
        src="https://s3.bukalapak.com/bukalapak-kontenz-production/content_attachments/67893/w-740/92802586_225540215456856_7684868667231593088_n.jpg"
        alt=""
      />

      <div className="p-1  ml-3 mb-1">
        <h1 className="text-bgHitam font-bold font-poppins text-lg  flex justify-start ">
          Sepatu Ventela
        </h1>
        <p className="text-bgHitam font-bold font-poppins text-base   flex justify-start ">
          Harga : Rp. 50.000
        </p>
        <p className="text-bgHitam font-bold font-poppins text-base  flex justify-start ">
          Stok Total : sisa 6
        </p>
      </div>
      <div className="pb-3">
        <ButtonPrimary label=" Tambah Ke Keranjang" />
      </div>
    </div>
  );
}

export default Card;
