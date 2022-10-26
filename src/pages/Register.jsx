import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";
import { Link } from "react-router-dom";
import { useTitle } from "../utils/redux/useTitle";

import CustomInput from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import Image from "../assets/register.png";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useTitle("Register");

  useEffect(() => {
    if (name && email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      name,
      email,
      password,
    };
    axios
      .post("https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/users", body)
      .then((res) => {
        const { message, data } = res.data;
        if (data) {
          navigate("/login");
        }
        alert(message);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container  px-4 mx-auto font-poppins">
      <div className="lg:grid grid-cols-2">
        <div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="font-bold text-bgdasar lg:mt-0 mt-24 lg:mb-2 mb-10">REGISTER</h1>
              <div className="w-2/3 lg:mb-0 mb-20">
                <img src={Image} alt="image register" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-bgdasar container">
          <div className="container  h-full flex flex-col justify-center items-center p-10">
            <form className="lg:w-2/3 w-full" onSubmit={(e) => handleSubmit(e)}>
              <div className=" border-white w-full my-5">
                <h4 className="text-white">Name</h4>
                <CustomInput className="w-full border border-white" id="name" type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="w-full my-5">
                <h4 className="text-white">Email</h4>
                <CustomInput className="w-full border border-white" id="inputEmail" type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="w-full my-5">
                <h4 className="text-white">Password</h4>
                <CustomInput className="w-full border border-white" id="inputPassword" type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="w-full my-10">
                <CustomButton id="btn-register" label="Register" loading={loading || disabled} />
              </div>
            </form>
            <div className="mt-10 flex items-center">
              <div className="m-1">Do You Have an Account?</div>
              <Link to="/login">
                <div className="m-1 text-white font-bold"> Log In</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithRouter(Register);
