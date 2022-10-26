import React from "react";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import { CardBtn } from "../components/Card";
import { CgProfile } from "react-icons/cg";
import { useTitle } from "../utils/redux/useTitle";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleAuth } from "../utils/redux/reducers/reducer";
import Skeleton from "react-loading-skeleton";
import { data } from "autoprefixer";

function ProfilOrang() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useTitle("Profile | Orang");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/users/1", {})
      .then((res) => {
        const { data } = res.data;
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
      <div className="lg:flex flex-row font-poppins">
        <div className="lg:basis-1/4">
          <div className=" bg-bgdasar my-2 lg:min-h-screen">
            <div className="flex items-center">
              <div className="text-white  text-7xl m-5">
                <CgProfile className="" />
              </div>
              <div className="text-white">
                <div>{datas.name}</div>
                <div>{datas.email}</div>
              </div>
            </div>
            <div className="px-4 text-white">
              <div className="my-4">Number Phone : {datas.phone}</div>
              <div className="my-4">Addres : {datas.address}</div>
              <div className="my-4">Bio : {datas.bio}</div>
            </div>
          </div>
        </div>
        <div className="lg:basis-3/4">
          <div className="grid lg:grid-cols-3">{loading ? <Skeleton /> : datas.product.map((datum) => <CardBtn name={datum.name} price={datum.price} stock={datum.stock} images={datum.images} />)}</div>
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(ProfilOrang);
