import Layout from "../components/Layout";
import React from "react";
import { useTitle } from "../utils/redux/useTitle";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAuth } from "../utils/redux/reducers/reducer";
import axios from "axios";
import { CustomButtonSatu } from "../components/CustomButton";

function ProductUpload() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useTitle("Upload");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/products/1", {})
      .then((res) => {
        const { data } = res.data;
        console.log(data);
        setDatas(data);
      })
      .catch((err) => {
        const { data } = err.response;
        if ([401, 403].includes(data.code)) {
          localStorage.removeItem("token");
          dispath(handleAuth(false));
          navigate("/login");
        }
        alert(data.message);
      })
      .finally(() => setLoading(false));
  };

  function deleteProduct() {
    setLoading(true);
    axios
      .delete("products/me/1")
      .then((res) => {
        console.log(res);
        const { message } = res.data;
        navigate("/profile");
        alert(message);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <div class="bg-bgdasar flex items-center p-5 overflow-hidden relative rounded-lg">
        <div class="lg:flex items-center">
          <div class="w-full lg:w-1/2  md:mb-0">
            <div class="relative flex justify-center items-cnter">
              <img src="https://via.placeholder.com/150" class=" h-[30rem] w-[30rem] relative lg:z-10" alt="" />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-10 mt-2">
            <div class="mb-2 font-poppins text-white">
              <p class="font-bold  text-4xl  mb-8">{datas.name}</p>
              <p class="font-bold  text-2xl mb-2 ">Price : Rp. {datas.price}</p>
              <p class="font-bold  text-2xl mb-2">Seller : Alexander Mount</p>
              <p class="font-bold  text-2xl mb-2">Stok Total : {datas.stock}</p>
              <p class="font-bold  text-2xl mb-4">Location : JL. Kyai Mojo, New York Selatan</p>

              <p class="font-bold  text-2xl mb-4">Detail Produks :</p>
              <p class="font-bold  text-2xl mb-5">{datas.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div class=" grid grid-cols-2 mt-8 w-full  ">
        <div className="mx-2">
          <CustomButtonSatu label="Edit" onClick={() => console.log("klick")} />
        </div>
        <div className="mx-2">
          <CustomButtonSatu label="Delete" onClick={() => deleteProduct()} />
        </div>
      </div>
    </Layout>
  );
}

export default ProductUpload;
