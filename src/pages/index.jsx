import React, { useEffect, useState } from "react";

import { WithRouter } from "../utils/Navigation";
import { useNavigate } from "react-router-dom";
import { CardBtn } from "../components/Card";
import axios from "axios";
import { useTitle } from "../utils/redux/useTitle";
import { HeaderDua } from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [listPorducts, setListProducts] = useState([]);
  useTitle("Home");

  const API = "https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/products";
  // const token = localStorage.getItem("token");

  useEffect(() => {
    getListProducts();
  }, []);

  // Get semua product
  const getListProducts = async () => {
    try {
      const response = await axios.get(API);
      setListProducts(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderDua />
      <div className="container  px-4 mx-auto items-center">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2">
          {listPorducts.map((product) => {
            return (
              <div key={product.i}>
                <Link to="/login">
                  <div className="text-black">
                    <CardBtn images={"https://via.placeholder.com/150"} name={product.name} price={product.price} stock={product.stock} />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WithRouter(Home);
