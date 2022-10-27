import React from "react";
import Layout from "../components/Layout";
import { CardBtn } from "../components/Card";
import CustomInput from "../components/CustomInput";
import { InputImage } from "../components/CustomComment";
import { CustomButton } from "../components/CustomButton";
import Skeleton from "react-loading-skeleton";
import { CustomCommentDua } from "../components/CustomComment";

import { WithRouter } from "../utils/Navigation";
import { setCart } from "../utils/redux/reducers/reducer";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleAuth } from "../utils/redux/reducers/reducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useTitle } from "../utils/redux/useTitle";

function HomeLogin() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [disabled, setDisabled] = useState(true);

  useTitle("Home");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if ((name && price && stock && images) || description) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, price, stock, description, images]);

  const fetchData = async () => {
    axios
      .get("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/products", {})
      .then((res) => {
        const { data } = res.data;
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

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      images,
      price,
      name,
      stock,
      description,
    };
    axios
      .post("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/products", body)
      .then((res) => {
        const { message, data } = res.data;
        if (data) {
          navigate("/productupload");
        }
        alert(message);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => setLoading(false));
  };

  function handleCart() {
    setLoading(true);
    axios
      .post("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/carts")
      .then((res) => {
        console.log(res);
        const { message, data } = res.data;
        if (data) {
          navigate("/cart");
        }
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
      <div class="lg:flex flex-row font-poppins">
        <div class="lg:basis-3/4">
          <div className="grid lg:grid-cols-3">
            {loading ? <Skeleton /> : datas.map((datum) => <CardBtn key={datum.id} name={datum.name} images={"https://via.placeholder.com/150"} price={datum.price} stock={datum.stock} addCart={() => handleCart(datum)} />)}
          </div>
        </div>
        <form class="lg:basis-1/4 border bg-bgdasar rounded-xl  text-white h-screen mt-2" onSubmit={(e) => handleSubmit(e)}>
          <div className="m-2 text-center font-bold">Upload Your Sales Here</div>
          <div className="px-5">
            <InputImage
              images={images}
              id="dropzone-file"
              type="file"
              onChange={(e) => {
                setImages(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>
          <div className="p-3">
            <div>
              <div>Tittle Product</div>
              <div>
                <CustomInput placeholder="Title Produt" type="text" id="titleProduct" onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div>
              <div>Price</div>
              <div>
                <CustomInput placeholder="Price" type="number" id="price" onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>
            <div>
              <div>Total Product</div>
              <div>
                <CustomInput placeholder="1" type="number" id="totalProduct" onChange={(e) => setStock(e.target.value)} />
              </div>
            </div>
            <div>
              <div>Detail Product</div>
              <div className="pb-2 w-full">
                <CustomCommentDua rows={5} placeholder="Descript your product" onChange={(e) => setDescription(e.target.value)} />
              </div>
            </div>
            <div className=" w-full">
              <CustomButton label="Upload" loading={loading || disabled} />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default WithRouter(HomeLogin);
