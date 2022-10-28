import React from "react";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { CustomButton } from "../components/CustomButton";
import { useState, useEffect } from "react";
import { handleAuth } from "../utils/redux/reducers/reducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { useTitle } from "../utils/redux/useTitle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Profile() {
  const MySwal = withReactContent(Swal);
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
      .get("users")
      .then((res) => {
        console.log(res);
        const { data } = res.data;
        setDatas(data);
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  function deleteAcc() {
    setLoading(true);
    axios
      .delete("users")
      .then((res) => {
        console.log(res);
        const { message, data } = res.data;
        navigate("/");
        alert(message);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => setLoading(false));
  }

  function deleteProduct() {
    setLoading(true);
    axios
      .delete("product/1")
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
  const fotoProfil = {
    width: "1.5em",
    height: "1.5em",
    borderRadius: "100%",
  };

  return (
    <Layout>
      <div className="lg:flex flex-row font-poppins">
        <div className="lg:basis-1/4">
          <div className=" bg-bgdasar mt-2">
            <div className="flex items-center">
              <div className="text-white  text-7xl m-5">
                <img src="https://via.placeholder.com/150" alt="https://via.placeholder.com/150" style={fotoProfil} />
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
          {/* <div className="grid lg:grid-cols-3">{loading ? <Skeleton /> : datas.product.map((datum) => <Card produk={datum.name} gambar={datum.images} harga={datum.price} stock={datum.stock} deleteProduk={() => deleteProduct()} />)}</div> */}
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(Profile);
