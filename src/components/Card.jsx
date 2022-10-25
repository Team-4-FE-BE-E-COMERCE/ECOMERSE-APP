import React from "react";
import { CustomButtonSatu } from "./CustomButton";
import { ImBin2 } from "react-icons/im";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";

function Card(props) {
  const imgProduct = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "0.5em 0.5em 0 0",
  };
  return (
    <div className="grid  font-poppins">
      <div className="m-2 flex flex-col bg-white shadow-lg rounded-md  items-center mb-3">
        <div className="w-full mb-3">
          {/* https://pict.sindonews.net/dyn/850/pena/news/2021/09/13/700/538850/faktafakta-yang-membuat-hidup-batman-menyedihkan-uri.jpg */}
          <img src={`${props.gambar}`} alt="" style={imgProduct} />
        </div>
        <div className="Flex justify-start m-2 w-full pl-4">
          <div>
            <h3 className="font-bold">
              <strong>{props.produk}</strong>
            </h3>
          </div>
          <div>Price : Rp.{props.harga}</div>
          <div>Total stok : {props.stock}</div>
        </div>
      </div>
    </div>
  );
}

function CardBtn(props) {
  const imgProduct = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "0.5em 0.5em 0 0",
  };
  return (
    <div className="grid font-poppins">
      <div className="m-2 flex flex-col bg-white shadow-lg rounded-md  items-center mb-3">
        <div className="w-full mb-3">
          <img src={props.images} alt="" style={imgProduct} />
        </div>
        <div className="Flex justify-start m-2 w-full pl-4">
          <div>
            <h3 className="font-bold">
              <strong>{props.name}</strong>
            </h3>
          </div>
          <div>Prize : Rp. {props.price}</div>
          <div>Total stok : {props.stock}</div>
        </div>
        <div className="m-3 w-full px-4">
          <CustomButtonSatu label="Add To Cart" />
        </div>
      </div>
    </div>
  );
}

function CardCart() {
  const [count, setCount] = useState(0);

  const imgProduct = {
    width: "15em",
    height: "15em",
    objectFit: "cover",
    borderRadius: "0",
  };
  return (
    <div className="grid font-poppins w-full">
      <div className="m-2 flex flex-row bg-white shadow-xl  items-center mb-3">
        <div className="m-2">
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div className="m-1 border">
          <img
            src="https://pict.sindonews.net/dyn/850/pena/news/2021/09/13/700/538850/faktafakta-yang-membuat-hidup-batman-menyedihkan-uri.jpg"
            alt=""
            style={imgProduct}
          />
        </div>
        <div className="flex flex-col border m-2 w-full h-full justify-between">
          <div className="m-2">
            <h2 className="font-bold text-black text-2xl">Product Title</h2>
            <p>Addres : Alamat : JL. Kyai Mojo, New York Selatan</p>
          </div>
          <div className="m-2">Prize : Rp. 50.000</div>
          <div className="flex flex-row m-2 border">
            <div className="basis-3/4  flex items-center p-2 text-hitam">
              <div className="mr-2">
                <ImBin2 />
              </div>
              <div>Remove from cart</div>
            </div>
            <div className="basis-1/4  flex justify-between items-center">
              <button onClick={() => setCount((count) => count - 1)}>
                <AiOutlineMinusCircle />
              </button>
              <div>{count}</div>
              <button onClick={() => setCount((count) => count + 1)}>
                <AiOutlinePlusCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card, CardBtn, CardCart };
