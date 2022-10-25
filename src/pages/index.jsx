import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

import { WithRouter } from "../utils/Navigation";
import { useNavigate } from "react-router-dom";
import { CardBtn } from "../components/Card";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [listPorducts, setListProducts] = useState([]);

  const API =
    "https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/products";
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
      <div className="grid grid-cols-4">
        {listPorducts.map((product) => {
          return (
            <div key={product.i}>
              <CardBtn
                images={product.images}
                name={product.name}
                price={product.price}
                stock={product.stock}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default WithRouter(Home);
