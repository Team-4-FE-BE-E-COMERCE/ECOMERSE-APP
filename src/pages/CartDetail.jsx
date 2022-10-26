import React from "react";
import Layout from "../components/Layout";
import { CardCart } from "../components/Card";
import { CustomButtonSatu } from "../components/CustomButton";
import { useTitle } from "../utils/redux/useTitle";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleAuth } from "../utils/redux/reducers/reducer";
import Skeleton from "react-loading-skeleton";

function CartDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useTitle("My Cart");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/carts", {})
      .then((res) => {
        const { data } = res;
        setDatas(data);
      })
      .catch((err) => {
        const { data } = err.response;
        if ([401, 403].includes(data.code)) {
          localStorage.removeItem("token");
          dispatch(handleAuth(false));
          navigate("/login");
        }
        alert(data.message);
      })
      .finally(() => setLoading(false));
  };
  console.log(datas);

  return (
    <Layout>
      <div className="lg:flex flex-row fonr-poppins">
        <div className="lg:basis-3/4">
          <div>{loading ? <Skeleton /> : datas.myCart.map((datum) => <CardCart images={datum.images} name={datum.name} address={datum.address} price={datum.price} qti={datum.qty} />)}</div>
        </div>
        <div className="lg:basis-1/4 shadow-xl">
          <div className="flex flex-col justify-between w-full border h-full items-center p-5">
            <div>
              <h2 className="text-2xl font-bold">Prise Total</h2>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Rp. 50000</h2>
            </div>
            <div className="border w-1/2">
              <CustomButtonSatu label="Buy" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartDetail;
