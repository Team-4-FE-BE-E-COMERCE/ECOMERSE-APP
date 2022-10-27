import React from "react";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { CgProfile } from "react-icons/cg";
import { CustomButton } from "../components/CustomButton";
import { useState, useEffect } from "react";
import { handleAuth } from "../utils/redux/reducers/reducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useTitle } from "../utils/redux/useTitle";

function Profile(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useTitle("My Profile");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/users", {})
      .then((res) => {
        const { data } = res.data;
        setDatas(data);
        console.log(res);
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

  function deleteAcc() {
    setLoading(true);
    axios
      .delete("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/users")
      .then((res) => {
        console.log(res);
        const { message, data } = res.data;
        if (data) {
          navigate("/profile");
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
      <div className="lg:flex flex-row font-poppins">
        <div className="lg:basis-1/4">
          <div className=" bg-bgdasar mt-2">
            <div className="flex items-center">
              <div className="text-white  text-7xl m-5">
                <CgProfile className="" />
              </div>
              <div className="text-white">
                <div>{datas.name}</div>
                <div>{datas.email}</div>
                <Link to="/">
                  <h3 className="text-sm text-white">Logout</h3>
                </Link>
              </div>
            </div>
            <div className="px-8 text-white">
              <div className="my-4">Number Phone : {datas.phone}</div>
              <div className="my-4">Addres : {datas.address}</div>
              <div className="my-4">Saldo : {datas.saldo}</div>
              <div className="my-4">Bio : {datas.bio}</div>
            </div>

            <div className="flex px-4 my-4">
              <div className="w-full m-2">
                <Link to="/edit">
                  <CustomButton label="Edit Profile" />
                </Link>
              </div>
              <div className="w-full m-2">
                <CustomButton label="Delete Acc" onClick={() => deleteAcc()} />
              </div>
            </div>
          </div>
          <div className="bg-bgdasar">
            <div>
              <div className="p-4 text-white ">
                My Order
                <Link to="/orderhistory">
                  <div className="p-4 bg-white text-bgdasar">ID Order 1</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:basis-3/4">
          <div className="grid lg:grid-cols-3">{loading ? <Skeleton /> : datas.product.map((datum) => <Card produk={datum.name} gambar={"https://via.placeholder.com/150"} harga={datum.price} stock={datum.stock} />)}</div>
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(Profile);
