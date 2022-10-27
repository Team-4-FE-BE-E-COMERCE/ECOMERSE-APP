import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

import { WithRouter } from "../utils/Navigation";
import { useNavigate } from "react-router-dom";
import { CardBtn } from "../components/Card";
import axios from "axios";
import { useTitle } from "../utils/redux/useTitle";

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
    <Layout>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2">
        {listPorducts.map((product) => {
          return (
            <div key={product.i}>
              <CardBtn images={"https://via.placeholder.com/150"} name={product.name} price={product.price} stock={product.stock} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default WithRouter(Home);
