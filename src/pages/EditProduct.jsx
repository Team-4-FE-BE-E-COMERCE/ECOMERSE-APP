import Layout from "../components/Layout";
import React from "react";
import { WithRouter } from "../utils/Navigation";
import { CustomButtonSatu } from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { CustomCommentDua } from "../components/CustomComment";
import { useTitle } from "../utils/redux/useTitle";

import axios from "axios";
import { handleAuth } from "../utils/redux/reducers/reducer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

function EditProduct() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [objSubmit, setObjSubmit] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useTitle("Edit Product");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("products/1")
      .then((res) => {
        const { name, price, stock, description } = res.data.data;
        setName(name);
        setPrice(price);
        setStock(stock);
        setDescription(description);
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    axios
      .put("products/1", objSubmit)
      .then((res) => {
        const { message } = res.data;
        alert(message);
        setObjSubmit({});
        navigate("/profile");
      })
      .catch((err) => {
        const { message } = err.response.data;
        MySwal.fire({
          title: "Failed",
          text: message,
          showCancelButton: false,
        });
      })
      .finally(() => fetchData());
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  if (loading) {
    return <div>Loading yoiiiiiiiii.....</div>;
  } else {
    return (
      <Layout>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div class="bg-bgdasar flex items-center p-5 relative rounded-lg">
            <div class="w-full lg:w-1/2  md:mb-0 px-10">
              <div class="relative flex justify-start items-cnter">
                <img src="https://via.placeholder.com/150" class=" h-[30rem] w-[30rem] relative lg:z-10" alt="" />
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10 mt-2">
              <div class="lg:basis-1/4 border bg-bgdasar rounded-xl  text-white mt-2">
                <div className="m-2 text-center font-bold">Edit Your Product</div>
                <div className="p-3">
                  <div>
                    <div>Tittle Product</div>
                    <div>
                      <CustomInput value={name} type="text" id="titleProduct" onChange={(e) => handleChange(e.target.value, "name")} />
                    </div>
                  </div>
                  <div>
                    <div>Price</div>
                    <div>
                      <CustomInput value={price} type="number" id="price" onChange={(e) => handleChange(e.target.value, "price")} />
                    </div>
                  </div>
                  <div>
                    <div>Total Product</div>
                    <div>
                      <CustomInput value={stock} type="number" id="totalProduct" onChange={(e) => handleChange(e.target.value, "stock")} />
                    </div>
                  </div>
                  <div>
                    <div>Detail Product</div>
                    <div className="pb-2 w-full">
                      <CustomCommentDua rows={5} value={description} onChange={(e) => handleChange(e.target.value, "description")} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" grid grid-cols-2 mt-8 w-full  ">
            <Link to="/profile" className="mx-2">
              <CustomButtonSatu label="Cancel" />
            </Link>
            <div className="mx-2">
              <CustomButtonSatu label="Save" id="btn-save" loading={loading} />
            </div>
          </div>
        </form>
      </Layout>
    );
  }
}

export default WithRouter(EditProduct);
