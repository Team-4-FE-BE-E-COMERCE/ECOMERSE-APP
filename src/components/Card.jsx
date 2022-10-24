import React from "react";
import { CustomButtonSatu } from "./CustomButton";
function Card() {
  const imgProduct = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "0.5em 0.5em 0 0",
  };
  return (
    <div className="grid lg:grid-cols-4 font-poppins">
      <div className="m-2 flex flex-col bg-white shadow-lg rounded-md  items-center mb-3">
        <div className="w-full mb-3">
          <img src="https://pict.sindonews.net/dyn/850/pena/news/2021/09/13/700/538850/faktafakta-yang-membuat-hidup-batman-menyedihkan-uri.jpg" alt="" style={imgProduct} />
        </div>
        <div className="Flex justify-start m-2 w-full pl-4">
          <div>
            <h3 className="font-bold">
              <strong>Product Title</strong>
            </h3>
          </div>
          <div>Prize : Rp. 50.000</div>
          <div>Total stok : Current 6</div>
        </div>
      </div>
    </div>
  );
}

function CardBtn() {
  const imgProduct = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "0.5em 0.5em 0 0",
  };
  return (
    <div className="grid lg:grid-cols-4 font-poppins">
      <div className="m-2 flex flex-col bg-white shadow-lg rounded-md  items-center mb-3">
        <div className="w-full mb-3">
          <img src="https://pict.sindonews.net/dyn/850/pena/news/2021/09/13/700/538850/faktafakta-yang-membuat-hidup-batman-menyedihkan-uri.jpg" alt="" style={imgProduct} />
        </div>
        <div className="Flex justify-start m-2 w-full pl-4">
          <div>
            <h3 className="font-bold">
              <strong>Product Title</strong>
            </h3>
          </div>
          <div>Prize : Rp. 50.000</div>
          <div>Total stok : Current 6</div>
        </div>
        <div className="m-3 w-full px-4">
          <CustomButtonSatu label="Add To Cart" />
        </div>
      </div>
    </div>
  );
}

export { Card, CardBtn };
