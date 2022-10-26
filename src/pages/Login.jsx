import React from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { handleAuth } from "../utils/redux/reducers/reducer";

import CustomInput from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { useTitle } from "../utils/redux/useTitle";
import ImageLogin from "../assets/login.png";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useTitle("Login");

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post(`https://virtserver.swaggerhub.com/HERIBUDIYANA/E-Commerce/1.0.0/login`, body)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        dispatch(handleAuth(true));
        alert("Login Successfull");
        navigate("/home");
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="container  px-4 mx-auto font-poppins">
        <div className="lg:grid grid-cols-2">
          <div>
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-full flex flex-col items-center justify-center h-full">
                <h1 className="font-bold text-bgdasar mb-24 lg:mt-0 mt-24">Login</h1>
                <div className="w-2/3">
                  <img src={ImageLogin} alt="image login" />
                </div>
                <div className="my-10 flex items-center">
                  <div className="m-1">Don't You Have an Account?</div>
                  <Link to="/register">
                    <div className="m-1 text-bgdasar font-bold"> Register</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-screen bg-bgdasar container">
            <div className="container h-full flex flex-col justify-center items-center p-10">
              <form className="lg:w-2/3 w-full" onSubmit={(e) => handleSubmit(e)}>
                <div className="border-white w-full my-5 text-white">
                  <h4> Email</h4>
                  <CustomInput id="input-email" type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="text-white my-5 ">
                  <h4> Password</h4>
                  <CustomInput id="input-password" type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="my-10">
                  <CustomButton id="btn-login" label="Login" loading={loading || disabled} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithRouter(Login);
